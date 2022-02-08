
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

function checkRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //reCaptcha not verified
        alert("no pass");
    }
    else {
        //reCaptch verified
        alert("pass");
    }
}

// implement on the backend
function backend_API_challenge() {
    var response = grecaptcha.getResponse();
    $.ajax({
        type: "POST",
        url: 'https://www.google.com/recaptcha/api/siteverify',
        data: { "secret": "6LdV6WIeAAAAAH6Qea936zb6j_13ZHzRVn3nODir", "response": response, "remoteip": "localhost" },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) { console.log(data); }
    });
}

animationApp.init();