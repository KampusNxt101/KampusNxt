const $ = (selector) => document.querySelector(selector);

function setupTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");
  const button = $("#themeToggle");
  if (!button) return;
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
}

function renderCards(list) {
  const grid = $("#postGrid");
  if (!grid) return;
  grid.innerHTML = list.map(post => `
    <article class="card">
      <a href="post.html?id=${encodeURIComponent(post.id)}" class="card-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <span class="badge">${post.category}</span>
      </a>
      <div class="card-body">
        <div class="meta">${formatDate(post.date)} · ${post.readTime}</div>
        <h2><a href="post.html?id=${encodeURIComponent(post.id)}">${post.title}</a></h2>
        <p>${post.excerpt}</p>
        <div class="tags">${post.tags.map(tag => `<span>#${tag}</span>`).join("")}</div>
        <a class="read-more" href="post.html?id=${encodeURIComponent(post.id)}">Read article →</a>
      </div>
    </article>
  `).join("");
  $("#emptyState")?.classList.toggle("hidden", list.length !== 0);
}

function setupGallery() {
  if (!$("#postGrid")) return;
  let activeCategory = "All";
  const searchInput = $("#searchInput");

  function applyFilters() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const filtered = posts.filter(post => {
      const categoryMatch = activeCategory === "All" || post.category === activeCategory;
      const searchable = [post.title, post.category, post.excerpt, ...post.tags].join(" ").toLowerCase();
      return categoryMatch && searchable.includes(query);
    });
    renderCards(filtered);
  }

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      activeCategory = button.dataset.category;
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", applyFilters);
  renderCards(posts);
}

function setupArticle() {
  const article = $("#article");
  if (!article) return;
  const id = new URLSearchParams(location.search).get("id");
  const post = posts.find(item => item.id === id);

  if (!post) {
    article.innerHTML = `<div class="empty"><h1>Article not found</h1><a class="read-more" href="index.html">← Back to articles</a></div>`;
    return;
  }

  document.title = `${post.title} | Knowledge Hub`;
  article.innerHTML = `
    <a class="back-link" href="index.html">← All articles</a>
    <div class="article-header">
      <span class="badge">${post.category}</span>
      <h1>${post.title}</h1>
      <div class="meta">${formatDate(post.date)} · ${post.readTime}</div>
    </div>
    <img class="article-cover" src="${post.image}" alt="${post.title}">
    <div class="article-content">${post.content}</div>
    <div class="article-tags">${post.tags.map(tag => `<span>#${tag}</span>`).join("")}</div>
  `;
}

setupTheme();
setupGallery();
setupArticle();
