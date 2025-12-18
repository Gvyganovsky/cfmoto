/*
    ----------------------------------
    1. Header
    ----------------------------------
*/

var swiper = new Swiper('.header__swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  speed: 2000,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  allowTouchMove: false
});

/*
    ----------------------------------
    2. Route
    ----------------------------------
*/

var swiper = new Swiper('.route__swiper-base', {
  loop: true,
  speed: 1000,
  lazy: true,
  autoplay: true,
  slidesPerView: 1,
  delay: 3000,
  keyboard: true,
  mousewheel: true,
  spaceBetween: 20,
  breakpoints: {
    1320: {
      slidesPerView: 2,
      centeredSlides: false
    }
  },

  pagination: {
    el: '.base',
    clickable: true
  }
});

var swiper = new Swiper('.route__swiper-advanced', {
  loop: true,
  speed: 1000,
  lazy: true,
  autoplay: true,
  slidesPerView: 1,
  delay: 3000,
  keyboard: true,
  mousewheel: true,
  spaceBetween: 20,
  breakpoints: {
    1320: {
      slidesPerView: 2,
      centeredSlides: false
    }
  },

  pagination: {
    el: '.advanced',
    clickable: true
  }
});

/*
    ----------------------------------
    3. Photos
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
    el: '.photos__pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3
  }
});

/*
    ----------------------------------
    4. Questions
    ----------------------------------
*/

const questions = document.querySelectorAll('[data-question-item]');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('questions__item_active');
  });
});

/*
    ----------------------------------
    5. Booking
    ----------------------------------
*/

let input = document.querySelector('[data-input-booking]');
const minus = document.querySelector('[data-button-minus]');
const plus = document.querySelector('[data-button-plus]');

minus.addEventListener('click', () => {
  let currentValue = parseInt(input.value, 10);
  if (currentValue > input.min) {
    input.value = currentValue - 1;
  }
});

plus.addEventListener('click', () => {
  let currentValue = parseInt(input.value, 10);
  if (currentValue < input.max) {
    input.value = currentValue + 1;
  }
});