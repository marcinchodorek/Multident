const hamburger = document.querySelector('.navbar__burger-box');
const navigation = document.querySelector('.navbar__navigation');
const textPath = document.querySelectorAll('.hero__text-svg path');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger--active');
    navigation.classList.toggle('navbar__navigation--active');
});

setTimeout(() => {
    textPath.forEach(path => {
        path.style.strokeDasharray = 0;
    })
}, 3200)

window.addEventListener('keydown', (e) => {
    console.log(e.code);
});



