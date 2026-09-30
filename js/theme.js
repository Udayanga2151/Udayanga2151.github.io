// ============================
// DARK / LIGHT MODE TOGGLE
// Switches body.dark-mode on/off, swaps between sun/moon SVG icons,
// remembers choice in localStorage so it persists across visits
// ============================

const themeToggle = document.getElementById("themeToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

function updateIcon(isDark) {
  iconMoon.style.display = isDark ? "none" : "block";
  iconSun.style.display = isDark ? "block" : "none";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}
updateIcon(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcon(isDark);
});