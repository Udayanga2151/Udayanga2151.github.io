const ambientBg = document.querySelector('.ambient-bg');
const orbs = ambientBg ? Array.from(ambientBg.querySelectorAll('.ambient-orb')) : [];

if (ambientBg && orbs.length) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const animate = (time) => {
      orbs.forEach((orb, index) => {
        const driftX = Math.sin(time * 0.00012 + index * 1.8) * 26;
        const driftY = Math.cos(time * 0.00011 + index * 1.5) * 20;
        const scale = 0.95 + Math.sin(time * 0.00016 + index * 2.1) * 0.16;
        orb.style.transform = `translate(${driftX}px, ${driftY}px) scale(${scale})`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}
