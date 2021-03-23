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
    question: "Does this not work? ",
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
var verdict = document.getElementById("verdict");

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  disiplayQuestion();
}
function disiplayQuestion() {
  choicesDiv.textContent = "";
  questionText.textContent = questions[currentQIndex].question;
  //   console.log(questions[currentQIndex]);.

  var thisAnswers = questions[currentQIndex].answers;
  for (var i = 0; i < thisAnswers.length; i++) {
    var button = document.createElement("button");
    button.textContent = thisAnswers[i];
    button.addEventListener("click", evaluateAnswer);
    choicesDiv.appendChild(button);
  }
}

function evaluateAnswer(event) {
  var userChoice = event.target.textContent;
  var solution = questions[currentQIndex].solution;

  if (userChoice === solution) {
    verdict.textContent = "Correct!";
  } else {
    verdict.textContent = "Incorrect!";
  }

  //check if current index is the last one
  if (currentQIndex < questions.length - 1) {
    currentQIndex++;
    var nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    nextButton.addEventListener("click", disiplayQuestion);
    choicesDiv.appendChild(nextButton);
  } else {
    endGame();
  }
}

function endGame() {
  console.log("game over");
}
