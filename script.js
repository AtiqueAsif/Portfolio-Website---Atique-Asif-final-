// ===== LOADING SCREEN =====
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');
  
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2500);
});

// ===== AOS INITIALIZATION =====
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// ===== TYPING ANIMATION =====
const typingElement = document.getElementById('typing-text');
if (typingElement) {
  const words = ['UI/UX Designer', 'SEO Content Writer', 'Front-End Developer', 'Content Strategist'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    let displayedText = currentWord.substring(0, charIndex);
    typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, typingSpeed / 2);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 1000);
    }
  }
  type();
}

// ===== MOBILE MENU =====
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");

if (menu && closeButton && nav) {
  menu.addEventListener("click", () => {
    nav.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  closeButton.addEventListener("click", () => {
    nav.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

  nav.addEventListener("click", (e) => {
    if (e.target === nav) {
      nav.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// ===== BUTTON SCROLL HANDLERS =====
const getInTouchBtn = document.getElementById('getInTouchBtn');
if (getInTouchBtn) {
  getInTouchBtn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
}

const viewWorkBtn = document.getElementById('viewWorkBtn');
if (viewWorkBtn) {
  viewWorkBtn.addEventListener('click', () => {
    const projectsSection = document.querySelector('#project');
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
}

// ===== CV DOWNLOAD BUTTON =====
const downloadCVBtn = document.getElementById('downloadCVBtn');
if (downloadCVBtn) {
  downloadCVBtn.addEventListener('click', () => {
    const cvContent = `
MD. ATIQUE ASIF
UI/UX Designer & SEO Content Writer

Contact: atiqueasif10@gmail.com | +8801307946682
Portfolio: https://atiqueasif10.netlify.app/
GitHub: https://github.com/AtiqueAsif

PROFESSIONAL SUMMARY
UI/UX Designer & SEO Content Writer with strong front-end development knowledge, focused on creating user-centered, visually clear, and conversion-driven digital experiences. Skilled in transforming complex ideas into intuitive interfaces through structured user research, wireframing, and information architecture.

EXPERIENCE
UI/UX Designer with Front-End Support - Self-Employed (March 2024 - Present)
- Designed and developed user-centered websites with focus on usability and conversion
- Created wireframes and layout structures based on user needs and business goals
- Translated design concepts from Figma into responsive interfaces

Junior Content Writer - Call The Cleaners Australia (Feb 2025 - Aug 2025)
- Created SEO-focused content including service pages, blogs, and landing pages
- Structured content using UX principles to improve readability and engagement
- Supported local SEO initiatives

Lead Generation Representative - Yasin International (June 2024 - Jan 2025)
- Achieved 15% increase in monthly outreach efficiency through structured market research
- Built and maintained accurate lead databases

EDUCATION
BSc in Computer Science & Engineering, ULAB | CGPA 3.79

SKILLS
Figma, HTML, CSS, JavaScript, React, Tailwind CSS, MySQL, GitHub
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Md_Atique_Asif_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// ===== ACTIVE NAVIGATION ON SCROLL =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav a, .mobile-nav a');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      const id = section.getAttribute('id');
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
  
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    if (window.scrollY > 500) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  }
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="user_name"]').value;
    const email = this.querySelector('input[name="user_email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    if (name && email && message) {
      alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
      this.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });
}

// ===== CARD HOVER EFFECTS =====
const cards = document.querySelectorAll('.card, .service-card, .skill-box, .stat-card, .approach-card, .timeline-content');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.services-container, .projects, .skills, .contact-wrapper, .stats-container, .timeline, .approach-container');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const video = document.getElementById('background-video');
  if (video) {
    video.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});