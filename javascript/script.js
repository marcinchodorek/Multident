const hamburger = document.querySelector('.navbar__burger-box');
const navigation = document.querySelector('.navbar__navigation');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger--active');
    navigation.classList.toggle('navbar__navigation--active');
})