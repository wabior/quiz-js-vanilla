let questionIndex = 0;
let correctAnswer = null;
let score = {'correct': 0, 'wrong': 0};
const questionArea = document.querySelector('main article');
const buttons = document.querySelectorAll('.quiz-button');
const glass = document.querySelector('.screen');
questions = questions.sort((a, b) => 0.5 - Math.random());

function buttonsActions(){
    buttons.forEach(function(btn, idx){
        btn.addEventListener('click', function(){

            if (idx === correctAnswer){
                if (questionIndex < questions.length - 1){

                    ++score.correct;
                    glass.classList.add('nextQuestion');
                    questionArea.classList.add('d-none');
                    correctAnswer = showQuestion(++questionIndex);
                    buttons.forEach((btn) => btn.classList.add('d-none'))
                    setTimeout(function(){
                        glass.classList.remove('nextQuestion');
                        buttons.forEach((btn) => btn.classList.remove('d-none', 'hasactive', 'focus'));
                        document.activeElement = null;
                        questionArea.classList.remove('d-none');
                    }, 600);
                    
                } else {
                    ++score.correct;
                    questionArea.innerHTML="<p>Gratulacje.</p><br><hr><br><p>Błędnych odpowiedzi: " + score.wrong + "</p>";
                    buttons.forEach((btn) => btn.classList.add('d-none'));
                }
            } else {
                btn.classList.add('wrongAnswer');
                ++score.wrong;
            }
        });
    });
}

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
buttonsActions();

