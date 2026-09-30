// ============================
// FLOATING DUST/INK PARTICLES
// Soft circles drifting slowly upward and fading,
// used as a calm background for the Thoughts page
// ============================

const canvas = document.getElementById("dustCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}

class Dust {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height; // start scattered, not all at the bottom
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 10; // starts just below the visible area
    this.radius = Math.random() * 2 + 1; // size between 1-3px
    this.speed = Math.random() * 0.4 + 0.1; // slow upward drift
    this.drift = (Math.random() - 0.5) * 0.3; // slight sideways sway
    this.opacity = Math.random() * 0.4 + 0.2;
  }

  move() {
    this.y -= this.speed;
    this.x += this.drift;

    if (this.y < -10) this.reset(); // loop back to bottom once it drifts off-screen
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(244, 226, 198, ${this.opacity})`; // soft warm gold, gentle on dark backgrounds
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = 40; // fixed, gentle amount — this effect doesn't need to scale with screen size
  for (let i = 0; i < count; i++) {
    particles.push(new Dust());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.move();
    p.draw();
  });
  requestAnimationFrame(animate);
}

resizeCanvas();
initParticles();
animate();

window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});