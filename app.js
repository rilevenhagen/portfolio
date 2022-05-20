console.log(`⤵️⤵️⤵️⤵️⤵️⤵️⤵️🤜🏻🤪🤛🏻  ⤵️⤵️⤵️⤵️⤵️⤵️⤵️



    “If opportunity doesn't knock, build a door.”
    Milton Berle



    “If somebody offers you an amazing opportunity but you are not sure you can do it, say yes – then learn how to do it later.”
    Richard Branson


    "Your talent determines what you can do. Your motivation determines how much you are willing to do. Your attitude determines how well you do it." 
    Lou Holtz

`)

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

    animationApp.timeL.to('.text', { y: '0%', duration: 1.9 });
    animationApp.timeL.to('.intro', { y: '-100%', duration: 1.5, delay: 1.5 });

}


animationApp.init();