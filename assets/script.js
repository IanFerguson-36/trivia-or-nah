var startButton = document.getElementById("start-button");
var startPage = document.getElementById("start-page");
var questionScreen = document.getElementById("question-screen");
var currentQIndex = 0;
var questions = [
  {
    question: "Does this work? ",
    answers: ["yes", "no", "absolutely not", "sure"],
    solution: "yes",
  },
  {
    question: "Does this work? ",
    answers: ["yes", "no", "absolutely not", "sure"],
    solution: "yes",
  },
  {
    question: "Does this work? ",
    answers: ["yes", "no", "absolutely not", "sure"],
    solution: "yes",
  },
  {
    question: "Does this work? ",
    answers: ["yes", "no", "absolutely not", "sure"],
    solution: "yes",
  },
  {
    question: "Does this work? ",
    answers: ["yes", "no", "absolutely not", "sure"],
    solution: "yes",
  },
];

//DOM ELEMENTS
var questionText = document.getElementById("question-text");
var choicesDiv = document.getElementById("choices");

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  disiplayQuestion();
}
function disiplayQuestion() {
  questionText.textContent = questions[currentQIndex].question;
  //   console.log(questions[currentQIndex]);.

  var thisAnswers = questions[currentQIndex].answers;
  for (var i = 0; i < thisAnswers.length; i++) {
    var button = document.createElement("button");
    button.textContent = thisAnswers[i];
    choicesDiv.appendChild(button);
  }
}
