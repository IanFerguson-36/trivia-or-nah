
var startButton = document.getElementById('start-button');
var startPage = document.getElementById('start-page')
var questionScreen = document.getElementById('question-screen');
var currentQIndex=0;
var questions= [{
    question:"Does this work? ",
    answers : ["yes","no","absolutely not" ],
    solution: "yes",

},
{
    question:"Does this work? ",
    answers : ["yes","no","absolutely not" ],
    solution: "yes",

},
{
    question:"Does this work? ",
    answers : ["yes","no","absolutely not" ],
    solution: "yes",

},
{
    question:"Does this work? ",
    answers : ["yes","no","absolutely not" ],
    solution: "yes",

},
{
    question:"Does this work? ",
    answers : ["yes","no","absolutely not" ],
    solution: "yes",

},


];
var qAndA=document.getElementById("q&a-container");




startButton.addEventListener("click", startGame)

function startGame(){
    startPage.classList.add('hidden')
    questionScreen.classList.remove('hidden')
    disiplayQuestion();
    


}
function disiplayQuestion(){
    questions[currentQIndex];


}


