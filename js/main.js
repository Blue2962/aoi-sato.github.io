const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");

header.innerHTML = `
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="research.html">Research</a>
      <a href="publications.html">Publications</a>
    </nav>
  </header>
`;

footer.innerHTML = `
  <footer>
    <p>© 2026 Aoi Sato</p>
  </footer>
`;

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
