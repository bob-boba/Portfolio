/**---------------------- toggle icon navbar---------------------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   
};






/**---------------------- scroll section active link---------------------------- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height ) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });
    /**--- sticky navbar ---- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /**remove toggle icon and navbar */
    navbar.onclick = () => {
        menuIcon.onclick ();
    }
};
/**---------------------- scroll reveal ---------------------------- */
ScrollReveal({
     //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .education-row, .contact form ', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

/**---------------------- tyoed js ---------------------------- */
const typed = new Typed('.moltiple-text', {
    strings: ['Software Enginner', 'Graphic Designer','Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});
/**---------------------- read more about me---------------------------- */
function MoreLess() {
    var text_more  = document.querySelector('#read-more-text');
    var btn  = document.querySelector('#BTN');
    if(text_more.style.display == "none"){
        text_more.style.display= "inline";
        btn.innerHTML="Read Less";
    }else{
        text_more.style.display= "none";
        btn.innerHTML="Read More"; 
    }
}
/**---------------------- EmailSubject()---------------------------- */
function EmailSubject(val1) {
    var text_more  = document.querySelector('#subject');
    text_more.value = val1 ;
}
/**---------------------- Email sender ---------------------------- */

Email.send({
    Host : "smtp.google.com",
    Username : "aboubakre.nechnache",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
