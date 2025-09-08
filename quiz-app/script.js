const quizData = [
    {
        question: 'How old is Florin',
        a: '10',
        b: '26',
        c: '110',
        d: '11',
        correct: 'c'
    }, {
        question: 'What is the  most used programming language in 2019?',
        a: 'Java',
        b: 'c++',
        c: 'phython',
        d: 'javaScript',
        correct: 'd'
    }, {
        question: 'Who is The President of US',
        a: 'Florin Pop',
        b: 'Donal Trump',
        c: 'Ivan Saldano',
        d: 'Mihal Andrel',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Jason object Notation',
        c: 'Document Object Model',
        d: 'Hellicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
];

const questionEl = document.getElementById("question");

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
}
submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else {
           quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
           <button onclick="location.reload()">Reload</button>`;
        }
    }
});