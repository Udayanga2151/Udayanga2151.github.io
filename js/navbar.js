document.write(`
  <nav class="navbar">
    <a href="index.html" class="logo">Lakshan U. Deshapriya</a>

    <!-- Hamburger button: only visible on small screens (controlled by CSS) -->
    <button id="menuToggle" class="menu-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="volunteering.html">Volunteering</a></li>
      <li><a href="thoughts.html">Thoughts</a></li>
      <li><a href="store.html">Products & Services</a></li>
      <li class="nav-contact-group">
        <p>Contact</p>
        <ul class="nav-contact-links">
          <li><a href="mailto:deslakshan2151@gmail.com">Email</a></li>
          <li><a href="https://www.linkedin.com/in/lakshan-deshapriya-222735347" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/udayanga2151" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.youtube.com/@lakshandeshapriya" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <div class="floating-contact">
    <div class="floating-contact-panel" id="floatingContactPanel" aria-hidden="true">
      <p class="floating-contact-heading"></p>
      <ul class="floating-contact-links" id="floatingContactLinks">
        <li>
          <a href="https://wa.me/94740419546?text=Hi%20%21" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </li>
      </ul>
    </div>
    <button
      class="floating-contact-toggle"
      id="floatingContactToggle"
      type="button"
      aria-expanded="false"
      aria-controls="floatingContactPanel"
      aria-label="Open quick links"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
`);