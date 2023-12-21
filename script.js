/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 /*================================= SPLASH SCREEN =========================*/
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.Nlogo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    },2000);

    setTimeout(()=>{
      intro.style.top = '-100vh';
    }, 2300)
  })
})
/*=========================== scroll sections actlive link ===============*/
let sections = document.querySelectorAll('section');
let nanLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            nanLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
  };
   /*================================= scroll reveal =========================*/
   ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.product-container, .latestproduct-box, .contact', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    /*================================= typed js =========================*/
    const typed = new Typed('.logo' ,{
      strings: ['Dinner Pride'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
     });