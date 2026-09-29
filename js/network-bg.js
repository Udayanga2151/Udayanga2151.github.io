// ============================
// ANIMATED PARTICLE NETWORK BACKGROUND
// Draws small moving dots and connects nearby ones with lines,
// giving a circuit-board / network diagram feel
// ============================

const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

// Makes the canvas fill its parent (.hero) exactly, including on resize
function resizeCanvas() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}

// One particle = one moving dot with a position and a slow random velocity
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4; // slow horizontal drift
    this.vy = (Math.random() - 0.5) * 0.4; // slow vertical drift
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the edges instead of disappearing off-screen
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2); // small circle = the dot
    ctx.fillStyle = "rgba(10, 28, 234, 0.8)"; // orange accent, matches your theme
    ctx.fill();
  }
}

// Creates the initial set of particles based on screen size
// (bigger screen = slightly more particles, capped for performance)
function initParticles() {
  particles = [];
  const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

// Draws a line between two particles if they're close enough,
// with the line fading out as the distance increases
function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        // Opacity shrinks as particles get further apart (max distance 130px)
        ctx.strokeStyle = `rgba(255, 255, 255,  ${1 - distance / 130})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}

// Main animation loop, runs every frame (~60 times per second)
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // wipe previous frame
  particles.forEach(p => {
    p.move();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animate); // schedules the next frame
}

// Setup: size the canvas, create particles, start animating
resizeCanvas();
initParticles();
animate();

// Rebuild everything if the browser window is resized
window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});