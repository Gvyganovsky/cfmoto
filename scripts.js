const questions = document.querySelectorAll('[data-question-item]');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle("questions__item_active");
  });
});