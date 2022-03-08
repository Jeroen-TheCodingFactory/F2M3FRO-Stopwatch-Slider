/* deze variabelen daar kan elke functie bij want ze zijn globaal gedeclareerd */
const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false; /* standaard telt die nog niet */

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startButton.onclick = function () {
    if (running === true) {/* stopwatch al loopt dan mag je niks doen*/
        return;
    }
    running = true;
    timer = setInterval(function () {
        seconds = seconds + 1;
        if (seconds === 60) {
            minutes = minutes + 1;
            seconds = 0;
            if(minutes < 10){
                minutesTimer.innerText = "0" + minutes;
                return
            }
            minutesTimer.innerText = minutes;
        }
        if(seconds < 10){
            secondsTimer.innerText = "0" + seconds;
            return
        }
        secondsTimer.innerText = seconds;  /* dit laat die zien in de html*/
    }, 5); /* dit is in miliseconden, 1000 ms is 1 seconde*/
}

stopButton.onclick = function () {
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function() {
    clearInterval(timer);
    running = false;
    minutes = 0;
    seconds = 0;
    minutesTimer.innerText = "0" + minutes;
    secondsTimer.innerText = "0" + seconds;
}

const slider = document.getElementById("js--range");
const rangeValue =   document.getElementById("js--rangeValue");
slider.value = 2;
rangeValue.innerText = 2 + "x";

slider.oninput = function(event){
   rangeValue.innerText = event.target.value + "x";
   document.getElementsByTagName("body")[0].style.fontSize = event.target.value + "rem";
}