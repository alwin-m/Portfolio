(() => {
  'use strict';

  // Dynamic base path support for both local dev and GitHub Pages /Portfolio/ subpath
  const basePath = window.location.pathname.includes('/Portfolio') ? '/Portfolio' : '';

  // Search Index (Mapping to clean canonical directory nodes)
  const searchData = [
    { title: "LIORA — Menstrual Cycle Intelligence & Speech", cat: "Projects", url: basePath + "/projects/liora/" },
    { title: "SCREAM — Offline Mesh & P2P Communication", cat: "Projects", url: basePath + "/projects/scream/" },
    { title: "Genome Sentinel — Computational Drug Discovery", cat: "Projects", url: basePath + "/projects/genome-sentinel/" },
    { title: "Megamind — Offline Personal AI Assistant", cat: "Projects", url: basePath + "/projects/megamind/" },
    { title: "ROS-Cycle — Cycle Tracking Systems", cat: "Projects", url: basePath + "/projects/roscycle/" },
    { title: "Projects & Engineering Hub", cat: "Pages", url: basePath + "/projects/" },
    { title: "Brand Provenance & Watermark (© j_e_e_n._)", cat: "Pages", url: basePath + "/provenance/" },
    { title: "About Alwin Madhu", cat: "Pages", url: basePath + "/about/" },
    { title: "Writing & Architecture", cat: "Pages", url: basePath + "/writing/" },
    { title: "News & Updates", cat: "Pages", url: basePath + "/news/" },
    { title: "Experiments & Prototypes", cat: "Pages", url: basePath + "/experiments/" },
    { title: "Timeline", cat: "Pages", url: basePath + "/timeline/" },
    { title: "Research & Publications", cat: "Pages", url: basePath + "/research/" },
    { title: "Work Experience", cat: "Pages", url: basePath + "/work/" },
    { title: "Contact", cat: "Pages", url: basePath + "/contact/" },
    { title: "Hathaway Algorithm", cat: "Technologies", url: basePath + "/research/hathaway-algorithm/" },
    { title: "P2P Mesh Network (Wi-Fi Direct / BLE)", cat: "Technologies", url: basePath + "/projects/scream/" },
    { title: "Local LLM Offline Assistant", cat: "Technologies", url: basePath + "/projects/megamind/" },
    { title: "AutoDock Vina", cat: "Technologies", url: basePath + "/projects/genome-sentinel/" },
    { title: "C2PA & Watermark Provenance", cat: "Technologies", url: basePath + "/provenance/" }
  ];

  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchTriggers = document.querySelectorAll('.search-trigger');

  let isOpen = false;

  const openSearch = () => {
    if (!searchOverlay || !searchInput) return;
    isOpen = true;
    searchOverlay.classList.add('open');
    searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
    setTimeout(() => searchInput.focus(), 50);
  };

  const closeSearch = () => {
    if (!searchOverlay || !searchInput) return;
    isOpen = false;
    searchOverlay.classList.remove('open');
    searchInput.blur();
  };

  // Toggle on click
  searchTriggers.forEach(btn => {
    btn.addEventListener('click', openSearch);
  });

  // Close on overlay click
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  // Keyboard shortcuts (Cmd+K / Ctrl+K and Esc)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (isOpen) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && isOpen) {
      closeSearch();
    }
  });

  // Render search results
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = '';
        return;
      }

      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.cat.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = '<div style="padding: 24px 20px; font-size: 14px; color: var(--text-3, #9e9e98);">No results found.</div>';
        return;
      }

      const grouped = {};
      filtered.forEach(item => {
        if (!grouped[item.cat]) grouped[item.cat] = [];
        grouped[item.cat].push(item);
      });

      let html = '';
      for (const [category, items] of Object.entries(grouped)) {
        html += `<div class="search-cat">${category}</div>`;
        items.forEach(item => {
          html += `
            <a href="${item.url}" class="search-result">
              <span>${item.title}</span>
              <span style="font-family: var(--mono, monospace); font-size: 11px; opacity: 0.5;">→</span>
            </a>
          `;
        });
      }

      searchResults.innerHTML = html;
    });
  }
})();
