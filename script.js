
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna", "None of the above"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        correct: 0
    },
    
];

let currentQuestion = 0;
let score = 0;

const quizcontainer= document.getElementById('quiz');
const questionElement = document.querySelector('.question');
const options = document.querySelectorAll('.options label');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

// Load the quiz question
function loadQuestion() {
    questionElement.textContent = quizData[currentQuestion].question;
    options.forEach((option, index) => {
        option.querySelector('input').value = index;
        option.querySelector('input').checked = false;
        option.textContent = quizData[currentQuestion].options[index];
    });
}


function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert('Please select an option');
    }
}


function showResult() {
    quiz.style.display = 'none';
    result.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2>`;
}

submitButton.addEventListener('click', checkAnswer);


loadQuestion();

const question = {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2 
};


const quiz = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna", "None of the above"],
        correct: 0
    },
    // More questions...
];
