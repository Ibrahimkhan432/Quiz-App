var questions = [
    {
        question: "HTML stands for",
        options: [
            "Hyper text markup language",
            "incorrect",
            "incorrect",
            "incorrect",
        ],
        corrrectAnswer: "Hyper text markup language",
    },

    {
        question: "Css stands for",
        options: [
            "Cascading styleSheet",
            "incorrect",
            "incorrect",
            "incorrect",
        ],
        corrrectAnswer: "Cascading styleSheet",
    },
    {
        question: "JS stands for",
        options: [
            "Javascript",
            "incorrect",
            "incorrect",
            "incorrect",
        ],
        corrrectAnswer: "Javascript",
    },
    {
        question: "which tag use for large heading",
        options: [
            "H1",
            "incorrect",
            "incorrect",
            "incorrect",
        ],
        corrrectAnswer: "H1",
    },
    {
        question: "How many ways to connect Css into index file",
        options: [
            "3",
            "incorrect",
            "incorrect",
            "incorrect",
        ],
        corrrectAnswer: "3",
    },

]

var currentQuestionNo = document.getElementById("currentQuestionNo");
var totalQuestionNo = document.getElementById("totalQuestionNo");
var question = document.getElementById("question");
var options = document.getElementById("options");


var currentIndex = 0;
var marks = 0;

function nextQuestion(){
if(currentIndex + 1 == questions.length){
    alert(`Question is completed and your answer is ${marks}`);
    currentIndex =0;
    marks = 0;
}
else{
    currentIndex++;
}
renderQuestion();
}

function checkQuestion(a, b) {
    if (a == b) {
        marks++;
        console.log(marks);
    }
    nextQuestion();
}


function renderQuestion() {
    currentQuestionNo.innerHTML = currentIndex + 1;
    totalQuestionNo.innerHTML = questions.length;
    question.innerHTML = questions[currentIndex].question;

options.innerHTML = "";

    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        var op = questions[currentIndex].options[i];
        options.innerHTML += `<h4><button onclick="checkQuestion('${op}', '${questions[currentIndex].corrrectAnswer}')">${op}</button></h4>`

        
    }

}
renderQuestion();
    
