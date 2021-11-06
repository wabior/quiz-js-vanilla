const questionArea = document.querySelector('main article');
const buttons = document.querySelectorAll('.quiz-button');
const glass = document.querySelector('.screen');
let questionIndex = 0;
let correctAnswer = null;
let score = {'correct': 0, 'wrong': 0};
questions = questions.sort((a, b) => 0.5 - Math.random());

function onClick(btn, idx){
    if (idx === correctAnswer){

        ++score.correct;

        if (questionIndex < questions.length - 1){

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
            glass.classList.add('nextQuestion');
            questionArea.classList.add('d-none');
            setTimeout(function(){
                glass.classList.remove('nextQuestion');
                document.activeElement = null;
                questionArea.classList.remove('d-none');
            }, 600);
            
            questionArea.innerHTML="<p>Gratulacje.</p><br><hr><br><p>Błędnych odpowiedzi: " + score.wrong + "</p>";
            buttons.forEach((btn) => btn.classList.add('d-none'));
        }
    } else {
        btn.classList.add('wrongAnswer');
        ++score.wrong;
    }
}

function buttonsActions(){
    buttons.forEach(function(btn, idx){
        btn.addEventListener('click', ()=>{
            onClick(btn, idx);
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

