//window.alert("This is a test to see if my html is properly sourced.");
//Goal: Create a multi-choice quiz with a penalized timer and score sheet
//Function to start the quiz
const startButton = document.getElementById('start')
const questionContainer = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById ('answerBtn')

let currentQuestionIndex


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    currentQuestionIndex = 0
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    showQuestion()
}

//Question buttons
function question() {

}

function selectNextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: "Blah blah",
        answer: [
            {text: '4', correct: true },
            {text: '22', correct: false }
        ]
    }
]