import nextQuestion from "./questionsMethods.js"; 

const glass = document.querySelector('.screen');
const buttons = document.querySelectorAll('.quiz-button');
const questionArea = document.querySelector('main article');

let correctAnswer = null;
let score = {'correct': 0, 'wrong': 0};
let questionIndex = 0;

function onClick(btn, idx){

    console.log('q.idx: ', questionIndex, 'q.length: ',  questions.length);

    if (idx === correctAnswer){

        ++score.correct;

        if (questionIndex < questions.length - 1){

            correctAnswer = nextQuestion(questionIndex++);            
            
        } else {
            glass.classList.add('nextQuestion');
            questionArea.classList.add('d-none');
            setTimeout(function(){
                glass.classList.remove('nextQuestion');
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

export default function buttonsActions(correct){
    correctAnswer = correct;
    buttons.forEach(function(btn, idx){
        btn.addEventListener('click', () => onClick(btn, idx));
    });
}
