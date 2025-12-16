/*
    ----------------------------------
    1. Photos
    ----------------------------------
*/

var swiper = new Swiper('.photos__swiper', {
  loop: true,
  speed: 1000,
  lazy: true,
  autoplay: true,
  slidesPerView: 1,
  delay: 3000,
  keyboard: true,
  mousewheel: true,
  spaceBetween: 30,
  breakpoints: {
    1320: {
      slidesPerView: 3,
      centeredSlides: false
    }
  },

  pagination: {
    el: ".photos__pagination",
    dynamicBullets: true,
  },
});
/*
    ----------------------------------
    2. Questions
    ----------------------------------
*/

const questions = document.querySelectorAll('[data-question-item]');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('questions__item_active');
  });
});