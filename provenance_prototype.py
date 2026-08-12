"""
Image Provenance & Watermarking Research Prototype
System 2: Baseline Metadata Embedding (EXIF/XMP), LSB Steganography, DCT Frequency-Domain Watermarking
Author: Alwin Madhu (Jeen / j_e_e_n._)
"""

import sys
import struct
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import PIL.Image
from scipy.fftpack import dct, idct


# =====================================================================
# 1. BASELINE LAYER: EXIF / Metadata Embedding & Extraction
# =====================================================================

def embed_exif_metadata(image_path: str, output_path: str, author: str = "Alwin Madhu (j_e_e_n._)", copyright_notice: str = "© j_e_e_n._", creation_tool: str = "Jeen Provenance Engine v1.0"):
    """
    Embeds standard EXIF metadata tags (Artist, Copyright, Software, ImageDescription) into JPEG/PNG images.
    """
    img = Image.open(image_path)
    
    # Obtain or create EXIF data structure
    exif = img.getexif()
    
    # Standard EXIF Tag IDs:
    # 0x013B (315): Artist
    # 0x8298 (33432): Copyright
    # 0x0131 (305): Software
    # 0x010E (270): ImageDescription
    
    exif[315] = author
    exif[33432] = copyright_notice
    exif[305] = creation_tool
    exif[270] = f"Original creation by {author}. Provenance claim: {copyright_notice}"
    
    img.save(output_path, exif=exif)
    print(f"[EXIF] Successfully embedded EXIF metadata into: {output_path}")


def extract_exif_metadata(image_path: str) -> dict:
    """
    Reads EXIF metadata tags from an image.
    """
    img = Image.open(image_path)
    exif = img.getexif()
    
    metadata = {
        "Artist": exif.get(315, "Not found"),
        "Copyright": exif.get(33432, "Not found"),
        "Software": exif.get(305, "Not found"),
        "Description": exif.get(270, "Not found"),
    }
    return metadata


# =====================================================================
# 2A. SPATIAL DOMAIN: LSB (Least Significant Bit) Watermarking
# =====================================================================

def embed_lsb_watermark(image_path: str, output_path: str, message: str = "© j_e_e_n._"):
    """
    Embeds a secret string into the least significant bits of the image's red channel.
    Note: LSB is fragile to JPEG recompression, but useful as an exact baseline.
    """
    img = Image.open(image_path).convert('RGB')
    arr = np.array(img, dtype=np.uint8)
    
    # Append delimiter to mark message end
    full_msg = message + "<END>"
    binary_msg = ''.join(format(ord(c), '08b') for c in full_msg)
    
    if len(binary_msg) > arr.shape[0] * arr.shape[1]:
        raise ValueError("Message too long for image dimensions.")
    
    flat_red = arr[:, :, 0].flatten()
    
    # Overwrite LSB of each pixel with message bit
    for i, bit in enumerate(binary_msg):
        flat_red[i] = (flat_red[i] & 0xFE) | int(bit)
        
    arr[:, :, 0] = flat_red.reshape(arr.shape[0], arr.shape[1])
    
    watermarked_img = Image.fromarray(arr)
    watermarked_img.save(output_path)
    print(f"[LSB] Embedded '{message}' into LSB channel: {output_path}")


def extract_lsb_watermark(image_path: str) -> str:
    """
    Extracts LSB message from the image's red channel.
    """
    img = Image.open(image_path).convert('RGB')
    arr = np.array(img, dtype=np.uint8)
    
    flat_red = arr[:, :, 0].flatten()
    bits = [str(flat_red[i] & 1) for i in range(len(flat_red))]
    
    # Convert bits back to string
    bytes_list = []
    for i in range(0, len(bits) - 7, 8):
        byte_str = ''.join(bits[i:i+8])
        char = chr(int(byte_str, 2))
        bytes_list.append(char)
        full_str = ''.join(bytes_list)
        if full_str.endswith("<END>"):
            return full_str[:-5]
            
    return "".join(bytes_list[:100]) # return partial if no delimiter found


# =====================================================================
# 2B. FREQUENCY DOMAIN: DCT (Discrete Cosine Transform) Watermarking
# =====================================================================

def _apply_dct2d(block):
    return dct(dct(block.T, norm='ortho').T, norm='ortho')

def _apply_idct2d(block):
    return idct(idct(block.T, norm='ortho').T, norm='ortho')

def embed_dct_watermark(image_path: str, output_path: str, watermark_signature: float = 42.0, alpha: float = 15.0):
    """
    Embeds a frequency-domain watermark into mid-frequency DCT coefficients.
    Mid-frequencies are chosen because high frequencies are removed by JPEG compression
    and low frequencies alter visual quality significantly.
    """
    img = Image.open(image_path).convert('L') # Convert to grayscale for frequency manipulation
    arr = np.array(img, dtype=np.float32)
    
    h, w = arr.shape
    # Pad or slice to multiples of 8
    h_blocks, w_blocks = h // 8, w // 8
    
    watermarked_arr = np.copy(arr)
    
    for i in range(h_blocks):
        for j in range(w_blocks):
            block = arr[i*8:(i+1)*8, j*8:(j+1)*8]
            dct_block = _apply_dct2d(block)
            
            # Embed watermark signature into mid-frequency coefficients (e.g. (4,3) and (3,4))
            dct_block[4, 3] += alpha * watermark_signature
            dct_block[3, 4] += alpha * watermark_signature
            
            idct_block = _apply_idct2d(dct_block)
            watermarked_arr[i*8:(i+1)*8, j*8:(j+1)*8] = idct_block
            
    watermarked_arr = np.clip(watermarked_arr, 0, 255).astype(np.uint8)
    result_img = Image.fromarray(watermarked_arr)
    result_img.save(output_path)
    print(f"[DCT] Frequency-domain watermark embedded into mid-DCT coefficients (alpha={alpha}): {output_path}")


def verify_dct_watermark(image_path: str, threshold: float = 10.0) -> bool:
    """
    Detects if the DCT mid-frequency signature exists in the target image.
    """
    img = Image.open(image_path).convert('L')
    arr = np.array(img, dtype=np.float32)
    
    h_blocks, w_blocks = arr.shape[0] // 8, arr.shape[1] // 8
    mid_freq_energy = 0.0
    
    for i in range(h_blocks):
        for j in range(w_blocks):
            block = arr[i*8:(i+1)*8, j*8:(j+1)*8]
            dct_block = _apply_dct2d(block)
            mid_freq_energy += (abs(dct_block[4, 3]) + abs(dct_block[3, 4])) / 2.0
            
    avg_energy = mid_freq_energy / (h_blocks * w_blocks)
    is_watermarked = avg_energy > threshold
    print(f"[DCT Verification] Average mid-frequency energy: {avg_energy:.2f} (Threshold: {threshold}) -> Watermark Detected: {is_watermarked}")
    return is_watermarked


# =====================================================================
# DEMONSTRATION & TEST SUITE
# =====================================================================

def run_provenance_demo():
    print("=" * 70)
    print("IMAGE PROVENANCE & WATERMARKING RESEARCH PROTOTYPE")
    print("Author: Alwin Madhu (Jeen / j_e_e_n._)")
    print("=" * 70)
    
    # 1. Create a synthetic test image
    test_file = "sample_test.png"
    exif_out = "sample_exif.jpg"
    lsb_out = "sample_lsb.png"
    dct_out = "sample_dct.jpg"
    cropped_lsb_out = "sample_lsb_cropped.png"
    
    img = Image.new('RGB', (400, 400), color=(50, 50, 60))
    d = ImageDraw.Draw(img)
    d.text((50, 180), "Original Photo Work\n© j_e_e_n._", fill=(240, 240, 242))
    img.save(test_file)
    print(f"\n1. Created base synthetic image: {test_file}")
    
    # 2. Test Standard EXIF Metadata Layer
    print("\n--- Layer 1: Standard EXIF Metadata ---")
    embed_exif_metadata(test_file, exif_out, author="Alwin Madhu (j_e_e_n._)", copyright_notice="© j_e_e_n._")
    extracted_meta = extract_exif_metadata(exif_out)
    print("Extracted EXIF Metadata:", extracted_meta)
    
    # 3. Test Spatial LSB Watermarking
    print("\n--- Layer 2A: Spatial LSB Steganography ---")
    embed_lsb_watermark(test_file, lsb_out, message="© j_e_e_n._ [ID: 0009-0008-2826-5082]")
    recovered_lsb = extract_lsb_watermark(lsb_out)
    print(f"Extracted LSB Payload: '{recovered_lsb}'")
    
    # Simulate crop edit on LSB
    lsb_img = Image.open(lsb_out)
    cropped = lsb_img.crop((10, 10, 300, 300))
    cropped.save(cropped_lsb_out)
    print(f"Simulated Crop Edit -> Saved {cropped_lsb_out}")
    recovered_cropped_lsb = extract_lsb_watermark(cropped_lsb_out)
    print(f"Extracted LSB Payload after cropping: '{recovered_cropped_lsb}' (Note: spatial shifts break naive LSB)")
    
    # 4. Test Frequency DCT Watermarking
    print("\n--- Layer 2B: Frequency Domain (DCT) Watermarking ---")
    embed_dct_watermark(test_file, dct_out, alpha=20.0)
    verify_dct_watermark(dct_out)
    
    print("\n" + "=" * 70)
    print("PROVENANCE RESEARCH SUMMARY:")
    print("- EXIF: Essential for search indexing & desktop OS info, but easily stripped by platforms (e.g. Instagram/Twitter).")
    print("- LSB: High capacity, visually imperceptible, but destroyed by cropping/compression.")
    print("- DCT: Resilient to JPEG recompression & minor scaling, but requires key synchronization for detection.")
    print("- C2PA (Content Credentials): Cryptographic manifest standard signed by HW/SW keys (e.g. Adobe/Google SynthID).")
    print("=" * 70)

if __name__ == "__main__":
    run_provenance_demo()
