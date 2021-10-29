
let questionIndex = 0;
const questionArea = document.querySelector("main article");
const buttons = document.querySelectorAll('.quiz-button');

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
                questionIndex++;
                showQuestion(questionIndex);
            } else {
                console.log('zla odpowiedz');
            }
        });
    });
}

showQuestion(questionIndex);
