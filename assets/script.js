var startButton = document.getElementById("start-button");
var startPage = document.getElementById("start-page");
var questionScreen = document.getElementById("question-screen");
var currentQIndex = 0;
var questions = [
  {
    question: "Commonly used data types DO NOT include ",
    answers: ["string", "boolean", "alerts", "numbers"],
    solution: "alerts",
  },
  {
    question: "The conditions in an if/else statement is enclosed within____. ",
    answers: ["quotes", "curly bracketts", "parentheses"],
    solution: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    solution: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables. ",
    answers: ["commas", "curly brackett", "quotes", "a waffle iron"],
    solution: "yes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
      "philip's head screwdriver",
      "console.log",
      "event listener",
      "jQuery",
    ],
    solution: "console.log",
  },
];

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
