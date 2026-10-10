// ============================
// MOBILE HAMBURGER MENU
// Toggles the nav-links list open/closed on small screens
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active"); // animates hamburger into an X
  });
}

const quickLinks = document.getElementById("floatingContactLinks");
const quickLinksToggle = document.getElementById("floatingContactToggle");
const quickLinksPanel = document.getElementById("floatingContactPanel");

if (quickLinks && quickLinksToggle && quickLinksPanel && navLinks) {
  navLinks.querySelectorAll("a").forEach((link) => {
    const item = document.createElement("li");
    const quickLink = link.cloneNode(true);
    quickLink.addEventListener("click", closeQuickLinks);
    item.appendChild(quickLink);
    quickLinks.appendChild(item);
  });

  function closeQuickLinks() {
    quickLinksToggle.setAttribute("aria-expanded", "false");
    quickLinksToggle.setAttribute("aria-label", "Open quick links");
    quickLinksPanel.setAttribute("aria-hidden", "true");
    quickLinksToggle.parentElement.classList.remove("open");
  }

  quickLinksToggle.addEventListener("click", () => {
    const isOpen = quickLinksToggle.getAttribute("aria-expanded") === "true";
    quickLinksToggle.setAttribute("aria-expanded", String(!isOpen));
    quickLinksToggle.setAttribute("aria-label", isOpen ? "Open quick links" : "Close quick links");
    quickLinksPanel.setAttribute("aria-hidden", String(isOpen));
    quickLinksToggle.parentElement.classList.toggle("open", !isOpen);
  });

  document.addEventListener("click", (event) => {
    if (!quickLinksToggle.parentElement.contains(event.target)) {
      closeQuickLinks();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && quickLinksToggle.getAttribute("aria-expanded") === "true") {
      closeQuickLinks();
      quickLinksToggle.focus();
    }
  });
}