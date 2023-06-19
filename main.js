const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
    isRunning = true;
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    isRunning = false;
  }
  startBtn.addEventListener("click", function() {
    if (!isRunning) {
      startTimer();
    }
  });
  
  stopBtn.addEventListener("click", function() {
    if (isRunning) {
      stopTimer();
    }
  });
  
  resetBtn.addEventListener("click", function() {
    resetTimer();
  });
  function formatTime(time) {
    let date = new Date(time);
    let hours = date.getUTCHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }




