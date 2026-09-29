// ============================
// TYPEWRITER EFFECT
// Types out the tagline letter by letter, then leaves a blinking cursor
// ============================
const text = "Learner.  Leader. Entrepreneur. Teacher. Writer.";
const el = document.getElementById("typedTagline");
let i = 0;

function typeChar() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeChar, 60); // 60ms per letter = natural typing speed
  }
}

typeChar();