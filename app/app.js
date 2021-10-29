
let questionIndex = 0;
const questionArea = document.querySelector('main article');
const buttons = document.querySelectorAll('.quiz-button');
const glass = document.querySelector('.screen');

function showQuestion(index){
    let currentQuestion = questions[index];
    questionArea.textContent = currentQuestion.question;
    showAnswers(currentQuestion);

}

function showAnswers(choices) {
    buttons.forEach(function (btn, index) {
        btn.textContent = choices.answerChoices[index];
        btn.addEventListener('click', function () {
            console.log(index);
            if (index == choices.correctAnswerIndex) {
                animate1();
                setTimeout(animate2,300);
                questionIndex++;
                showQuestion(questionIndex);
            } else {
                console.log('zla odpowiedz');
            }
        });
    });
}

function animate1(){
    glass.classList.add('nextQuestion');
}

function animate2(){
    glass.classList.remove('nextQuestion');
}

// function wrongAnswer(){
//     glass.classList.add('wrongAnswer');
//     setTimeout(() => glass.classList.remove('wrongAnswer'))
// }

showQuestion(questionIndex);

