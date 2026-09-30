// ============================
// MOBILE HAMBURGER MENU
// Toggles the nav-links list open/closed on small screens
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active"); // animates hamburger into an X
});