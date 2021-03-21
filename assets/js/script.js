const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElements = document.getElementById('answer-buttons') 

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Which team won the champions league in 2019?',
        answers: [
            { text: 'Manchester United', correct: false},
            { text: 'Liverpool', correct: true},
            { text: 'Bacelona', correct: false},
            { text: 'Real Madrid', correct: false}
        ]
    }
]

// //array of questions
// var questions = [
//     {q: "Soccer is played using a ball?", a:"t"},
//     {q: "Offside is when a player runs out of bounds?", a:"f"},
//     {q: "A player cannot grab the ball with their hands unless they are the goalie?", a:"t"},
//     {q: "The number of players on a team during player is 12?", a:"f"},
//     {q: "In Europe, soccer is referred to as Feetball?", a:"f"}
// ]

// //variable to keep track of score
// var score = 0;

// //iterate over the questions array and display each question in a confirmation box
// for (var i = 0; i < questions.length; i++) {
//     var answer = confirm(questions[i].q);

//     if (answer === true && questions[i].a === 't' || answer === false && questions[i].a === 'f') {
//         score++;
//         alert('You are correct!');
//     }else{
//         alert('You are wrong!');
//     }
// }

// //check the user's answers against the correct answer


// //alert the user if they are correct or wrong. Increment the score accordinly


// //At the end of the game, alert the user with the final score
// alert('Your final socre is ' + score +'.' );