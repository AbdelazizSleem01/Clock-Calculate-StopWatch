const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime;
let elapsedTime = 0;
let isRunning = false;

// setInterval : هي تكرار الوظيفه على فترات زمنيه معينه والزمن جواها بيكون بالثانيه بكون جواها  فانكشن بتتنفز على حسب الزمن الى انت حاطه 
// formatTime:هى الحاجه الى هتظهر للمستخدم 
// now : بتظهر الوقت على اساس الوقت الحالى 
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      // textContent :  لكن الفرق ان التيكست كونتنت بتجيب النص فقط انما الإنر بتجيب السطر الى فيه الأى دى كله هتي لو فيه اسبان مثلا   innerHTML هى زى  
      display.textContent = formatTime(elapsedTime);
    }, 1000);
    isRunning = true;
  }
  
//clearInterval:  setInterval هى مسود بتعمل  مسح مؤقت عند حد معين انت مديهولها بإستخدام 
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




