const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit-btn')
var userNameForm = document.getElementById('user-name-form')
var userNameValue = document.getElementById('user-name')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons') 
var highScoreList = document.getElementById('high-scores')
var highScoreListUl = document.getElementById('high-score-ul')
var score = 0;
var highScores = [];

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    if(shuffledQuestions.length > currentQuestionIndex) {
        setNextQuestion()
    }else{
        userName()
    }
})
submitButton.addEventListener('click', highScore)


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    // Array.from(answerButtonsElement.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })
    nextButton.classList.remove('hide')

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score+=1
        console.log(score)
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

 function userName() {
    resetState()
    questionElement.innerHTML = "<div'> Your score is " + score + ".</h3><br><br><span'>Please enter your name.</span>";
    userNameForm.classList.remove('hide')
    startButton.classList.add('hide')
 }

 function highScore() {
    resetState()

    highScores.push( {
        key: userNameValue,
        value: score
    });

    for (v in highScores) {
        document.getElementById('high-scores-ul').innerHTML += '<li>' + v + '</li>'
    }
    
    highScoreList.classList.remove('hide')
    startButton.classList.remove('hide')
    
    startButton.innerText = "Restart"
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
    },
    {
        question: 'Which country has won the most world cups?',
        answers: [
            { text: 'Brazil', correct: true},
            { text: 'Geramny', correct: false},
            { text: 'Italy', correct: false},
            { text: 'Uruguay', correct: false}
        ]
    },
    {
        question: 'Which country has the most precentage of population interested in soccer?',
        answers: [
            { text: 'Spain', correct: false},
            { text: 'China', correct: false},
            { text: 'Italy', correct: false},
            { text: 'United Arab Emirates', correct: true}
        ]
    },
    {
        question: 'Which soccer player is the highest paid?',
        answers: [
            { text: 'Cristiano Ronaldo', correct: false},
            { text: 'Lionel Messi', correct: true},
            { text: 'Neymar Jr.', correct: false},
            { text: 'Kylian Mbappe', correct: false}
        ]
    },
    {
        question: 'What is the greatest loss in international soccer?',
        answers: [
            { text: 'Arbroat vs Bon Accord', correct: false},
            { text: 'Dundee Harp vs Aberdeen Rovers', correct: false},
            { text: "A.S Adema vs Stade Olympique L'Emyrne", correct: true},
            { text: 'Australia vs American Samoa', correct: false}
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