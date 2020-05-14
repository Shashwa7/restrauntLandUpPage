//Select element function
const selectElement = element => {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const  body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});

/* creating scroll animations */

//scroll reveal
window.sr = ScrollReveal();

//grabbing classes with class name animate-left
sr.reveal('.animate-left',{
    origin: 'left',  //where the animation is coing form
    duration: 1000, // 1000ms = 1s;
    distance: '25rem', //how far its travelling from
    delay: 300, //how long should it take for the animation functionalities to trigger
});

sr.reveal('.animate-right',{
    origin: 'right',  //where the animation is coing form
    duration: 1000, // 1000ms = 1s;
    distance: '25rem', //how far its travelling from
    delay: 300, //how long should it take for the animation functionalities to trigger
});

sr.reveal('.animate-top',{
    origin: 'top',  //where the animation is coing form
    duration: 1000, // 1000ms = 1s;
    distance: '25rem', //how far its travelling from
    delay: 300, //how long should it take for the animation functionalities to trigger
});


sr.reveal('.animate-bottom',{
    origin: 'bottom',  //where the animation is coing form
    duration: 1000, // 1000ms = 1s;
    distance: '25rem', //how far its travelling from
    delay: 300, //how long should it take for the animation functionalities to trigger
});

