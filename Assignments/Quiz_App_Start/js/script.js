const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const quit_btn = document.querySelector('.quit');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const option = document.querySelector('.option');
const timer_sec = document.querySelector('.timer_sec');
const time_line = document.querySelector('.time_line');
const next_btn = document.querySelector('.next_btn');
const total_que = document.querySelector('.total_que');
const result_box = document.querySelector('.result_box');
const score_text = document.querySelector('.score_text');
const restart = document.querySelector('#restart');


let timerInterval;

let points = 0;
let totalNumbofQuestions = questions.length;
let qCounter = 0;


let timer = 15;
let lineTimer = 0;


start_btn.addEventListener('click', function () {
    info_box.classList.add('activeInfo');
    start_btn.style.display = 'none';
})

quit_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    start_btn.style.display = 'block';

})

continue_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    loadQuestion(qCounter);
})

function loadQuestion(index) {
    let allOptions = questions[index].options;
    que_text.innerHTML = questions[index].question;
    option_list.innerHTML = '';

    for (let i = 0; i < allOptions.length; i++) {
        option_list.innerHTML += `<div class="option" onclick="optionSelect(this,${index},${i})"><span>${allOptions[i]}</span ></div > `;
    }

    timerInterval = setInterval(timerCount, 1000);

}

let timerCount = function () {

    if (timer != 0) {
        timer--;
        timer_sec.textContent = timer;

        if (lineTimer < 550) {
            lineTimer += 550 / 15;
        }

        time_line.style.width = lineTimer + 'px';
    }
}

let optionSelect = function (opt, q, o) {
    for (let i = 0; i < 4; i++) {

        if (questions[q].options[i] == questions[q].answer) {
            option_list.children[i].classList.add("correct");
        }
        option_list.children[i].classList.add("disabled");

    }

    if (questions[q].options[o] == questions[q].answer) {
        points++;
    }

    if (questions[q].options[o] != questions[q].answer) {
        opt.classList.add("incorrect");

    }
    clearInterval(timerInterval);

    qCounter++;
    next_btn.classList.add('show');
    total_que.innerHTML = (qCounter) + '/6 question';
    if (qCounter === totalNumbofQuestions) {
        quiz_box.classList.remove('activeQuiz');
        result_box.classList.add('activeResult');
        score_text.textContent = points + " from " + totalNumbofQuestions;

    }

}

next_btn.addEventListener('click', function () {
    loadQuestion(qCounter);
    resetAllQuestions();
})



let resetAllQuestions = function () {

    timer_sec.textContent = 15;
    lineTimer = 0;
    next_btn.classList.add('show');
    time_line.style.width = 0;
    timerCount = 0;
    timerInterval = setInterval(timerCount, 1000);

}

restart.addEventListener('click', function () {
    window.location.reload();
});