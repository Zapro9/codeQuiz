var questionIndex = 0;
var time = questions.length * 25;
var timerId;

var questionEl = document.getElementById("questions");
var startBtn = document.getElementById("start");var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var choicesEl = document.getElementById("o");


function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    getQuestions();

}

function getQuestions() {
    var currentQuestion = questions[questionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    
    currentQuestion.choices.forEach(function(choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
    
        choiceNode.textContent = i + 1 + ". " + choice;
    
        // attach click event listener to each choice
        choiceNode.onclick = questionClick;
    
        // display on the page
        choicesEl.appendChild(choiceNode);
      });
    }
    
  
// user clicks button to submit initials
// submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
// startBtn.onclick = startQuiz;

// initialsEl.onkeyup = checkForEnter;


