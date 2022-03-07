/* deze variabelen daar kan elke functie bij want ze zijn globaal gedeclareerd */
const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
let seconds = 0;
let minutes = 0;
let running = false; /* standaard telt die nog niet */

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startButton.onclick = function(){
    if(running === true){/* stopwatch al loopt dan mag je niks doen*/
        return;
    } 
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1; 
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;  /* dit laat die zien in de html*/
    }, 100); /* dit is in miliseconden, 1000 ms is 1 seconde*/
}

stopButton.onclick = function(){
   clearInterval(timer);
   running = false;
}