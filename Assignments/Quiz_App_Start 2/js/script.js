const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const next_btn = document.querySelector('.next_btn');
const timer_sec = document.querySelector('.timer_sec');
const time_line = document.querySelector('.time_line');
const total_que = document.querySelector('.total_que');

let currentQuestion = 0;
let timeTick = 10;
let timerLineA = 0;

start_btn.addEventListener('click', function(){
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function(){
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function(){
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');

    loadQuestion(currentQuestion);
});

function loadQuestion(q){
  reset();
    que_text.textContent = questions[q].question;
    option_list.innerHTML = '';

    for(let i=0; i<questions[q].options.length; i++){
       option_list.innerHTML += `
        <div class="option" onclick="optionClicked()">
            <span>${questions[q].options[i]}</span>
        </div>
        `;
    } 
    next_btn.style.display = "none";
    if(currentQuestion != questions.length-1){
        currentQuestion++;
    }
    total_que.textContent = currentQuestion + '/' + questions.length + 'questions';
}

next_btn.addEventListener('click', function(){
    loadQuestion(currentQuestion);
})

function optionClicked(){
    next_btn.style.display = "inline";
    clearInterval(ticker);
    clearInterval(timerLineAnime);
}


function timer(){
    timer_sec.textContent = timeTick;
    if( timeTick !=0 ){ 
        timeTick--;
    }
    else { 
        // aftr Timer is 0 disable clicking
        option_list.innerHTML = '';
        for(let i=0; i<questions[currentQuestion-1].options.length; i++){
            option_list.innerHTML += `
            <div class="option disabled">
                <span>${questions[currentQuestion-1].options[i]}</span>
            </div>
            `;
        } 
        next_btn.style.display = "inline";
    }
}



function timerLineFill(){
    time_line.style.width = timerLineA+'px';
    if (timerLineA <= 548){
        timerLineA +=5.3;
    }
    
}
  
function disableQuestions(q){
    for(let i=0; i<questions[q].options.length; i++){
        option_list.children[i].classList.add('disabled');
        if(questions[q].options[i] == questions[q].answer){
            option_list.children[i].classList.add('correct');
        }
    }
    continue_btn.classList.add('show');
}

function reset(){
     timerLineAnime = setInterval(timerLineFill, 100);
      ticker = setInterval(timer, 1000); 
      timeTick = 10;
      timerLine = 0;
}
