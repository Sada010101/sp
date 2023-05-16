window.addEventListener('DOMContentLoaded', () => {
    // Btns
    const btn = document.querySelector('.btn');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');
    const btn4 = document.querySelector('.btn4');
    const btn5 = document.querySelector('.btn5');
  
    // Reset Btn
    const reset = document.querySelector('.reset');
  
    // Question Element
    const question = document.querySelector('.question');
  
    // Answers
    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const third = document.querySelector('#third');
    const fourth = document.querySelector('#fourth');
    const fiveth = document.querySelector('#fiveth');
  
    // Score
    let count = 0;
  
    // Question
    const allQuestionTest = [
      'Сколько будет 6 * 5',
      'Сколько будет -150 - -200',
      'Сколько будет 50 * 0',
      'Сколько будет 11 * 11',
    ];
  
    // Function add and delete Question
    function universal(el1, el2, test) {
      const correct = el1.querySelector('.correct');
  
      let score = el1.querySelector('input[type="radio"]:checked');
  
      if (score == correct) {
        count++;
      }
  
      console.log(count);
  
      el1.classList.add('hide');
  
      if (el1.classList.contains('hide')) {
        el2.classList.add('show');
        el2.classList.remove('hide');
  
        question.textContent = test;
      }
    }
  
    btn.addEventListener('click', (e) => {
      e.preventDefault();
  
      universal(first, second, allQuestionTest[0]);
    });
  
    btn2.addEventListener('click', (e) => {
      e.preventDefault();
  
      universal(second, third, allQuestionTest[1]);
    });
  
    btn3.addEventListener('click', (e) => {
      e.preventDefault();
  
      universal(third, fourth, allQuestionTest[2]);
    });
  
    btn4.addEventListener('click', (e) => {
      e.preventDefault();
  
      universal(fourth, fiveth, allQuestionTest[3]);
    });
  
    btn5.addEventListener('click', (e) => {
      e.preventDefault();
  
      const correct = fiveth.querySelector('.correct');
  
      let score = fiveth.querySelector('input[type="radio"]:checked');
  
      if (score == correct) {
        count++;
      }
      console.log(count);
  
      fiveth.classList.add('hide');
  
      question.textContent = `Вы угадали ${count} из 5`;
  
      reset.classList.remove('hide');
    });
  
    reset.addEventListener('click', () => {
      location.reload();
    });
  });
  