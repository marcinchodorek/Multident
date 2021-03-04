const hamburger = document.querySelector('.navbar__burger-box');
const hamburgerBtn = document.querySelector('.navbar__burger');
const navigation = document.querySelector('.navbar__navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger--active');
    navigation.classList.toggle('navbar__navigation--active');
});

hamburgerBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        hamburger.classList.toggle('burger--active');
        navigation.classList.toggle('navbar__navigation--active');
    }
})