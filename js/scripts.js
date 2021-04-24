const d = document;

const days = d.querySelector("#days");
const hours = d.querySelector("#hours");
const minutes = d.querySelector("#minutes");
const seconds = d.querySelector("#seconds");

const timeLeft = {
    d:0,
    h:0,
    m:0,
    s:0
}

let totalSeconds;


function init(){
    totalSeconds = Math.floor((new Date('05.24.2021') - new Date()) / 1000);
    
    let interval = setInterval(()=>{
        if(totalSeconds < 0){
            clearInterval(interval);
        }
        countTime();
        printTime();
        // console.log(timeLeft);
    },1000);
}

function countTime(){
    if(totalSeconds > 0){
        --timeLeft.s;
        if(timeLeft.m >= 0 && timeLeft.s < 0){
            timeLeft.s = 59;
            --timeLeft.m;
           if(timeLeft.h >= 0 && timeLeft.m < 0){
               timeLeft.m = 59;
               --timeLeft.h;
               if(timeLeft.d >= 0 && timeLeft.h < 0){
                   timeLeft.h = 23;
                   --timeLeft.d;
               }
            }
        }
    }

    --totalSeconds;
}

function setTimeLeft(){
    timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
    timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
    timeLeft.m = Math.floor(totalSeconds / (60) % 60);
    timeLeft.s = Math.floor(totalSeconds % 60);

    console.log(timeLeft);
    
}

function printTime() {
    days.textContent = timeLeft.d;
    hours.textContent = timeLeft.h;
    minutes.textContent = timeLeft.m;
    seconds.textContent = timeLeft.s;
  }


init();
setTimeLeft();





