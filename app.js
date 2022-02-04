
const animationApp = {}

// hamburger menu ==========>

animationApp.hamburger = document.getElementById('hamburger')

animationApp.navUL = document.getElementById('navUl')

// animation for the page ========>
animationApp.init = () => {

    animationApp.hamburger.addEventListener('click', () => {
        animationApp.navUL.classList.toggle('show');
    });

    animationApp.timeL = gsap.timeline({ defaults: { ease: "power1.out" } });

    animationApp.timeL.to('.text', { y: '0%', duration: 1.5 });
    animationApp.timeL.to('.intro', { y: '-100%', duration: 1.5, delay: 1.5 });

}

animationApp.init();