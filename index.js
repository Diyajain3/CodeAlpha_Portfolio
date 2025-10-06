// Selectors
const logoLink = document.querySelector('.logo'); // single logo
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('header nav');

menuIcon.addEventListener('click',()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
})
// Function to clear active classes
const activePage = () => {
  navLinks.forEach(link => link.classList.remove('active'));
  

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Navigation click events
navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');

      // Delay for smooth transition
      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

// Logo click -> go to first section
if (logoLink) {
  logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
      activePage();
      navLinks[0].classList.add('active');

      setTimeout(() => {
        sections[0].classList.add('active');
      }, 1100);
    }
  });
}

// Resume tabs
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    resumeDetails.forEach(detail => detail.classList.remove('active'));
    resumeDetails[idx].classList.add('active');
  });
});

// Portfolio slider
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

// Function to activate portfolio slide
const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');
  const totalSlides = portfolioDetails.length;

  // Corrected template literal for translateX
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => detail.classList.remove('active'));
  portfolioDetails[index].classList.add('active');
};

// Arrow Right
if (arrowRight) {
  arrowRight.addEventListener('click', () => {
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    const totalSlides = portfolioDetails.length;

    if (index < totalSlides - 1) {
      index++;
      arrowLeft.classList.remove('disabled');
    } else {
      index = totalSlides - 1;
      arrowRight.classList.add('disabled');
    }

    activePortfolio();
  });
}

// Arrow Left
if (arrowLeft) {
  arrowLeft.addEventListener('click', () => {
    if (index > 0) {
      index--;
      arrowRight.classList.remove('disabled');
    } else {
      index = 0;
      arrowLeft.classList.add('disabled');
    }

    activePortfolio();
  });
}

// Typed.js text animation
const typed = new Typed('.multiple-text', {
  strings: [
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Full-Stack Developer',
    'App Developer',
    'Web Developer'
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true
});

