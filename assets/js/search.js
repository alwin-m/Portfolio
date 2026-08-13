(() => {
  'use strict';

  // Search Index (Mapping to unique HTML filenames)
  const searchData = [
    { title: "LIORA", cat: "Projects", url: "/Portfolio/projects/project-liora.html" },
    { title: "SCREAM", cat: "Projects", url: "/Portfolio/projects/project-scream.html" },
    { title: "Genome Sentinel", cat: "Projects", url: "/Portfolio/projects/project-genome-sentinel.html" },
    { title: "Megamind", cat: "Projects", url: "/Portfolio/projects/project-megamind.html" },
    { title: "ROS-Cycle", cat: "Projects", url: "/Portfolio/projects/project-roscycle.html" },
    { title: "Projects Hub", cat: "Pages", url: "/Portfolio/projects/projects-overview.html" },
    { title: "About Alwin Madhu", cat: "Pages", url: "/Portfolio/about/about-alwin-madhu.html" },
    { title: "Writing & Architecture", cat: "Pages", url: "/Portfolio/writing/writing.html" },
    { title: "News & Updates", cat: "Pages", url: "/Portfolio/news/news.html" },
    { title: "Experiments & Prototypes", cat: "Pages", url: "/Portfolio/experiments/experiments.html" },
    { title: "Timeline", cat: "Pages", url: "/Portfolio/timeline/timeline.html" },
    { title: "Research & Publications", cat: "Pages", url: "/Portfolio/research/research-overview.html" },
    { title: "Work Experience", cat: "Pages", url: "/Portfolio/work/work-experience.html" },
    { title: "Contact", cat: "Pages", url: "/Portfolio/contact/contact.html" },
    { title: "Hathaway Algorithm", cat: "Technologies", url: "/Portfolio/projects/project-liora.html" },
    { title: "P2P Mesh Network", cat: "Technologies", url: "/Portfolio/projects/project-scream.html" },
    { title: "Local LLM Offline Assistant", cat: "Technologies", url: "/Portfolio/projects/project-megamind.html" },
    { title: "AutoDock Vina", cat: "Technologies", url: "/Portfolio/projects/project-genome-sentinel.html" }
  ];

  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchTriggers = document.querySelectorAll('.search-trigger');

  let isOpen = false;

  const openSearch = () => {
    isOpen = true;
    searchOverlay.classList.add('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
    // Use setTimeout to ensure focus happens after transition starts
    setTimeout(() => searchInput.focus(), 50);
  };

  const closeSearch = () => {
    isOpen = false;
    searchOverlay.classList.remove('open');
    searchInput.blur();
  };

  // Toggle on click
  searchTriggers.forEach(btn => {
    btn.addEventListener('click', openSearch);
  });

  // Close on overlay click
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  // Keyboard shortcuts (Cmd+K / Ctrl+K and Esc)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      isOpen ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && isOpen) {
      closeSearch();
    }
  });

  // Search filtering logic
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = searchData.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.cat.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<div style="padding:24px 20px; font-size:14px; color:var(--text-3);">No results found.</div>';
      return;
    }

    // Group by category
    const grouped = matches.reduce((acc, match) => {
      if (!acc[match.cat]) acc[match.cat] = [];
      acc[match.cat].push(match);
      return acc;
    }, {});

    let html = '';
    for (const [cat, items] of Object.entries(grouped)) {
      html += `<div class="search-cat">${cat}</div>`;
      items.forEach(item => {
        html += `<a href="${item.url}" class="search-result">${item.title}</a>`;
      });
    }

    searchResults.innerHTML = html;
  });
})();
