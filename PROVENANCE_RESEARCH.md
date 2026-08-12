# Image Provenance & Digital Watermarking Research
**Author:** Alwin Madhu (Jeen / `j_e_e_n._`)  
**Scope:** Research Prototype & Analysis of Content Provenance, Watermarking, and C2PA Standards

---

## 1. Overview & Problem Statement

Photographers and digital creators routinely apply visual watermark signatures (such as `© j_e_e_n._`) to assert ownership over image and video assets. However, visual signatures can be cropped out, covered, or erased via modern generative AI inpainting.

To provide recoverable proof of ownership and content origin without altering visual aesthetic, digital content protection relies on three distinct layers:

1. **Standard EXIF / XMP Metadata Embedding** (Baseline Metadata Layer)
2. **Frequency-Domain / Spatial Digital Watermarking** (Pixel-Level Watermarking)
3. **C2PA / Content Credentials Standard** (Cryptographic Manifest & Chain of Custody)

---

## 2. Layer Analysis & Technical Trade-offs

| Watermark / Provenance Technique | Robustness to Cropping | Robustness to Compression (JPEG/WebP) | Robustness to Re-editing / Inpainting | Platform Survival (Instagram, X, Meta) | Tamper Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Standard EXIF / XMP** | ❌ Wiped | ❌ Wiped | ❌ Wiped | ❌ Stripped by 95% of social platforms | ❌ None |
| **Spatial LSB Steganography** | ❌ Destroyed | ❌ Destroyed | ❌ Destroyed | ❌ Destroyed | ❌ Low |
| **Frequency-Domain (DCT/DWT)** | ⚠️ Partial | ✅ High | ⚠️ Partial | ⚠️ Partial | ⚠️ Medium |
| **Deep Learning Watermarks (SynthID)** | ✅ High | ✅ High | ✅ High | ✅ High | ✅ High |
| **C2PA Content Credentials** | ✅ Preserved (if sidecar/header) | ✅ Preserved | ✅ Detects edit history | ⚠️ Dependent on platform support | ✅ Cryptographic (PKI signed) |

---

## 3. Deep-Dive: How C2PA / Content Credentials Works

The **C2PA (Coalition for Content Provenance and Authenticity)** standard—developed by Adobe, Google, Microsoft, Sony, and Leica—is the open industry standard for content authenticity.

Unlike fragile pixel watermarks or stripped EXIF tags, C2PA uses **Cryptographic Manifests**:

1. **Assertion Claim:** When an image is captured or edited, a manifest is created containing:
   - Creator identity (e.g. `Alwin Madhu (j_e_e_n._)`)
   - Rights & Copyright (`© j_e_e_n._`, ORCID: `0009-0008-2826-5082`)
   - Tooling used (e.g. Lightroom, Photoshop, Camera hardware)
   - Hash digests of the original pixels
2. **Digital Signature:** The manifest is signed using a X.509 cryptographic private key (issued by a trusted Certificate Authority or self-signed PKI).
3. **Embedding:** The signed manifest is bound directly into the image file (as JUMBF box in JPEG/PNG/WebP) or stored as a cryptographic sidecar file (`.c2pa`).
4. **Verification:** Any viewer (or web application) uses public key cryptography to verify if pixels have been modified since signing. If edited, the chain of custody lists exact modifications.

### Practical C2PA Tooling Integration
To generate official C2PA Content Credentials using `c2patool` (open-source Rust CLI by C2PA):

```bash
# Manifest configuration (manifest.json)
{
  "title": "Original Photo Work",
  "assertions": [
    {
      "label": "std.schema-org.CreativeWork",
      "data": {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "author": [{
          "@type": "Person",
          "name": "Alwin Madhu",
          "alternateName": "j_e_e_n._"
        }],
        "copyrightNotice": "© j_e_e_n._"
      }
    }
  ]
}

# Sign image with C2PA tool
c2patool original.jpg -m manifest.json -o watermarked_c2pa.jpg
```

---

## 4. Prototype Script (`provenance_prototype.py`)

A fully working Python research script is provided in [`provenance_prototype.py`](file:///c:/Users/alwin/Downloads/Portfolio-main%20%281%29/Portfolio-main/provenance_prototype.py) implementing:
- `embed_exif_metadata()` / `extract_exif_metadata()`
- `embed_lsb_watermark()` / `extract_lsb_watermark()`
- `embed_dct_watermark()` / `verify_dct_watermark()`

### Execution
Run the prototype using Python:
```powershell
python provenance_prototype.py
```
