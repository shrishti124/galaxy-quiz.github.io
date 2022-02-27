const quizData = [
  {
    question: "1. The ‘Big Bang Theory’ is related to which of the following?",
    a: "Continental Drift",
    b: "Origin of Universe",
    c: "Origin of Himalayas",
    d: "Eruption of Volcanoes",
    correct: "b",
  },
  {
    question: "2. The Milky Way is classified as..?",
    a: "Spiral Galaxy",
    b: "Electrical Galaxy",
    c: "Irregular Galaxy",
    d: "Round Galaxy",
    correct: "a",
  },
  {
    question: "3. What does the colour of star indicates?",
    a: "Distance from the Sun",
    b: "Lighting or glow",
    c: "Distance from the earth",
    d: "Temperature",
    correct: "d",
  },
  {
    question: "4. What is the time taken by the Sun to revolve around the centre of our galaxy?",
    a: "2.5 Crore years",
    b: "10 Crore years",
    c: "25 Crore years",
    d: "50 Crore years",
    correct: "c",
  },
  {
    question: "5. Which of the following concept related to the limit beyond stars suffer internal collapse?",
    a: "Chandrasekhar limit",
    b: "Eddington limit",
    c: "Hoyle limit",
    d: "Fowler limit",
    correct: "a",
  },
  {
    question: "6. Which of the following celestial phenomena occurs due to stars?",
    a: "Ozone",
    b: "Black hole",
    c: "Rainbow",
    d: "Comet",
    correct: "b",
  },
  {
    question: "7. Who among the following propounded the theory of Black Hole?",
    a: "C.V Raman",
    b: "H.J Bhabha",
    c: "S Chandrasekhar",
    d: "Hargovind Khurana",
    correct: "c",
  },
  {
    question: "8. Which of the following planet of the solar system associated with Goldilocks Zone?",
    a: "Mars",
    b: "Earth",
    c: "Jupiter",
    d: "Mercury",
    correct: "b",
  },
  {
    question: "9. Which is the brightest star outside the Solar System?",
    a: "Sirius",
    b: "Proxima Centauri",
    c: "Alpha Centauri",
    d: "Beta Centaury",
    correct: "a",
  },
  {
    question: "10. How much time does sun lights take to reach earth?",
    a: "12 minutes",
    b: "10 minutes",
    c: "8 minutes",
    d: "18 minutes",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `  
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
         <button onclick="history.go(0)">Play Again</button>  
       `
    }
  }
}); 