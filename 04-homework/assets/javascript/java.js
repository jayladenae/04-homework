var startBtn = document.querySelector("#startBtn");
var timer = document.getElementById('timerDisplay');


 startBtn.addEventListener("click", function (){
   var timeRem = 300; 
   var timeInt = setInterval(function (){
       if (timeRem > 1){
           timer.textContent = timeRem + ' seconds remaining.';
           timeRem--;
      } else if (timeRem === 0){
           timer.textContent = ' ';
           clearInterval(timeInt);
       }
   }, 1000);

   });
