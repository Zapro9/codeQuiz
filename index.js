var questionIndex = 0;
var time = questions.length * 25;
var timerId;

var questionEl = document.getElementById("questions");
var startBtn = document.getElementById("start");var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("time");


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
    
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
    
        choiceNode.textContent = i + 1 + ". " + choice;
   
        choiceNode.onclick = questionClick;
  
        choicesEl.appendChild(choiceNode);
      });
    }

    function questionClick() {
        if (this.value !== questions[questionIndex].answer) {
            feedbackEl.textContent = "Wrong!"
        } else {
            feedbackEl.textContent = "Correct";
        }
        
        questionIndex++;
        getQuestions();
        }

    function quizEnd() {
        var endScreenEl = document.getElementById("end-screen");
        endScreenEl.removeAttribute("class");

        
    }
        
    
