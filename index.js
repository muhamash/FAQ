// Get all the question elements
const questions = document.querySelectorAll('.question');

// Event listener for each question
questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isAnswerVisible = answer.classList.contains('hidden');

    // Hide all answer contents except the clicked one
    questions.forEach((q) => {
      const eachAns = q.nextElementSibling;
      if (eachAns !== answer) {
        eachAns.classList.add('hidden');
        q.classList.remove('active');
      }
    });

    // Toggle the 'hidden' class on the clicked question's answer
    answer.classList.toggle('hidden', !isAnswerVisible);
    question.classList.toggle('active', !isAnswerVisible);
  });
});
