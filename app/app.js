let questionIndex = 0;
let correctAnswer = null;
const questionArea = document.querySelector('main article');
const buttons = document.querySelectorAll('.quiz-button');
const glass = document.querySelector('.screen');

buttons.forEach(function(btn, idx){
    btn.addEventListener('click', function(){
        console.log(idx, questionIndex, correctAnswer, questions.length);
        if (idx === correctAnswer){
            if (questionIndex < questions.length - 1){
                correctAnswer = showQuestion(++questionIndex);
            } else {
                questionArea.textContent = "Gratulacje ;) Jesteś zwolniona.";
                buttons.forEach((btn) => btn.classList.add('d-none'));
            }
        } else {
            btn.classList.add('wrongAnswer');
            console.log(btn);
        }
    });
});


function showQuestion(index){
    let currentQuestion = questions[index];
    questionArea.textContent = currentQuestion.question;
    showAnswers(currentQuestion);

    return currentQuestion.correctAnswerIndex;
}

function showAnswers(currentQuestion){
    buttons.forEach(function(btn, index){
        btn.textContent = currentQuestion.answerChoices[index];
        btn.classList.remove('wrongAnswer');
    });
}

correctAnswer = showQuestion(questionIndex);

