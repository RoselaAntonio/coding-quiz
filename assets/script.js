//window.alert("This is a test to see if my html is properly sourced.");
//Goal: Create a multi-choice quiz with a penalized timer and score sheet
//Function to start the quiz
const startButton = document.getElementById('start')
const questionContainer = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById ('answerBtn')

let currentQuestion


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    selectNextQuestion()
}

//Question buttons
function selectNextQuestion() {
    showQuestion(currentQuestion)
}

function showQuestion(questions) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Blah blah',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }
]