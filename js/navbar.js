let navSlide = () => {
    let theHamburger = document.querySelector('.hamburger');
    let theNav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    
        theHamburger.addEventListener('click', () => {
        //Toggle Nav
        theNav.classList.toggle('nav-active');

        //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ``;
                }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
           //Burger Animation
            theHamburger.classList.toggle('toggle');
        });
    
}
navSlide();