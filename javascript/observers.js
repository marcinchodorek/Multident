//number counter animation
const numbers = document.querySelectorAll('.counter__wrapper-item span');

const countOptions = {
    threshold: 0,
    rootMargin: '0px 0px -15px 0px'
};

const countNumbers = new IntersectionObserver(function (entries, countNumbers) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            const updateNumber = () => {
                const target = +entry.target.getAttribute('data-target');
                const count = +entry.target.innerText;
                const increment = target / 100;
                if (count < target) {
                    entry.target.innerText = count + increment;
                    setTimeout(updateNumber, 30);
                } else {
                    entry.target.innerText = target;
                }
            }
            updateNumber();
            countNumbers.unobserve(entry.target);
        }
    })
}, countOptions);

numbers.forEach(number => countNumbers.observe(number));



// about disappear anim
const aboutText = document.querySelector('.about__content');

const toggleTextOptions = {
    threshold: 1,
    rootMargin: "-200px 0px -150px 0px"
};

const toggleTextObserver = new IntersectionObserver(function (entries, toggleTextObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting && !entry.target.classList.contains('appear')) {
            return;
        } else {
            entry.target.classList.toggle('appear');
        }
    })
}, toggleTextOptions);

toggleTextObserver.observe(aboutText);


// image loading observer

// const loadingImg = document.querySelector('.counter__img');
// const counterBox = document.querySelector('.counter__wrapper');

// const loadImgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px 0px 100px"
// };

// const loadImgObserver = new IntersectionObserver(function (entries, loadImgObserver) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             entry.target.classList.add('appear');
//             counterBox.classList.add('appear');
//             loadImgObserver.unobserve(entry.target);
//         }
//     })
// }, loadImgOptions);

// loadImgObserver.observe(loadingImg);


