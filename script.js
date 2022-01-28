let clockContainer = document.querySelector(".clock-container");
let button = document.getElementById("button");
let showText = document.querySelector(".showText");
let actualClock = document.getElementById("clock");
// Display CSS variable text
let lunchBreak = document.querySelector(".lunchBreak-disabled");
let workTime = document.querySelector(".workTime-disabled");

function showTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var clockTime = hours + ':' + minutes + ':' + seconds;
    actualClock.innerText = clockTime;


    if (clockTime.includes("15")) {
        lunchBreak.style.display = "block";
        workTime.style.display = "none";
    }
    else {
        lunchBreak.style.display = "none";
        workTime.style.display = "block";
    }
}


setInterval(showTime, 1000);


