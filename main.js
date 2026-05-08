let quizbox = document.getElementById("quizbox")
let quiz = document.getElementById("quiz");
let button0 = document.getElementById("button0")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let result = document.getElementById("result")

let quizArray = [
    {
        question: "What is the capital of Bangladesh?",
        options: ["Dhaka", "Barisal", "Chittagong"],
        answer: 0,
    },
    {
        question: "What is the national fruit of Bangladesh?",
        options: ["Mango", "Jackfruit", "Kiwi"],
        answer: 1,
    },
    {
        question: "Who has won the most Ballon'dor in football history ?",
        options: ["Messi", "Ronaldo", "Marco Van Basten"],
        answer: 0,
    },
    {
        question: "Which country has won the most FIFA Worldcups?",
        options: ["Brazil", "Argentina", "Portugal"],
        answer: 0,
    },
];

let currentQuestion = 0
let score = 0

function loadQuestion(){
    quiz.innerHTML = quizArray[currentQuestion].question;
    button0.innerHTML = quizArray[currentQuestion].options[0]
    button1.innerHTML = quizArray[currentQuestion].options[1]
    button2.innerHTML = quizArray[currentQuestion].options[2]
}

loadQuestion()

function check(selectedAnswer){
    if(selectedAnswer == quizArray[currentQuestion].answer){
        score++
        result.innerHTML = "Correct! 🎉"
    }
    else{
        result.innerHTML = "Wrong! ❌"
    }

    currentQuestion++

    setTimeout(() => {
        if (currentQuestion < quizArray.length) {
            loadQuestion();
            result.innerHTML = "";
        } else {
            quizbox.innerHTML = `You scored ${score} out of ${quizArray.length}!`;
        }
    }, 2000);
}