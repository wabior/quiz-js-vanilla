const glass = document.querySelector('.screen');
const questionArea = document.querySelector('main article');
const buttons = document.querySelectorAll('.quiz-button');
let correctAnswer = null;

questions = questions.sort((a, b) => 0.5 - Math.random());

function showAnswers(currentQuestion){
    buttons.forEach(function(btn, index){
        btn.textContent = currentQuestion.answerChoices[index];
        btn.classList.remove('wrongAnswer');
    });
}

export function showQuestion(index = 0){
    let currentQuestion = questions[index];
    questionArea.textContent = currentQuestion.question;
    showAnswers(currentQuestion);

    return currentQuestion.correctAnswerIndex;
}

export default function nextQuestion(questionIndex){
    glass.classList.add('nextQuestion');
    questionArea.classList.add('d-none');
    correctAnswer = showQuestion(questionIndex);
    buttons.forEach((btn) => btn.classList.add('d-none'))
    setTimeout(function(){
        glass.classList.remove('nextQuestion');
        buttons.forEach((btn) => btn.classList.remove('d-none', 'hasactive', 'focus'));
        questionArea.classList.remove('d-none');
    }, 600);

    return correctAnswer;
}