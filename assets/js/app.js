
const slider = tns({
    container: ".slider__content",
    prevButton: ".slider__btn.btn--left",
    nextButton: ".slider__btn.btn--right",
    items: 4,
    nav: false,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        }
      }
})

const hamburger = document.querySelector('.header__nav-hamburger');
const mobileMenu = document.querySelector('.header__nav-list');
const mobileItem = document.querySelectorAll('.header__nav-list li');


hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

mobileItem.forEach((item) => {
    item.addEventListener('click',() => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});