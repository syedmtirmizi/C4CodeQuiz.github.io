const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit-btn')
var userNameForm = document.getElementById('user-name-form')
var userNameValue = document.getElementById('user-name').value;
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons') 
var highScoreList = document.getElementById('high-scores')
var highScoreListUl = document.getElementById('high-scores-ul')
var score = 0;
var highScores = new Map();

let shuffledQuestions, currentQuestionIndex

questionContainerElement.classList.remove('hide')
answerButtonsElement.classList.add('hide')
questionElement.innerText = "Code Quiz Challenge"
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
    questionContainerElement.classList.add('hide')
    answerButtonsElement.classList.remove('hide')
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
    console.log("name value is " + userNameValue);
    console.log("score is " + score);

    highScores.set( 
        userNameValue,
        score
    );
    

    for (let [key, value] of highScores) {
        var li = document.createElement('li')
        li.appendChild(document.createTextNode(key + ": " + value))
        highScoreListUl.appendChild(li)
    }
    
    questionElement.innerText = "Highscores"
    userNameForm.classList.add('hide')
    highScoreList.classList.remove('hide')
    highScoreListUl.classList.remove('hide')
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
            { text: 'Germany', correct: false},
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