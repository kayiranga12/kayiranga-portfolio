      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
      
      // Mobile menu toggle
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');
      
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('show');
      });
      
      // Close mobile menu when clicking on a link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('show');
        });
      });
      
      // Contact form submission
      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. I will get back to you soon!');
        this.reset();
      });