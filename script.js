const digitalClock = document.querySelector('.digitalClock');
const stopBtn = document.querySelector('.stopBtn')
const playBtn = document.querySelector('.playBtn')
let body = document.querySelector('body');
let textHours = document.querySelector('.textHours')
let textMinutes = document.querySelector('.textMinutes')
let textSeconds = document.querySelector('.textSeconds')

let hours = 23;
let minutes = 59;
let seconds = 60;
let hoursDecimal = document.querySelector('.hoursDecimal');
let hoursSingularity = document.querySelector('.hoursSingularity');
let minutesDecimal = document.querySelector('.minutesDecimal');
let minutesSingularity = document.querySelector('.minutesSingularity')
let secondsDecimal = document.querySelector('.secondsDecimal');
let secondsSingularity = document.querySelector('.secondsSingularity');

function countDown(){
  seconds--;
  if(seconds ===-1){
    seconds = 59;
    --minutes;
  }
  if (minutes === -1) {
    minutes = 59; 
    --hours;     
  }
  
  
  hoursDecimal.innerHTML = hours.toString().split('')[0];
  hoursSingularity.innerHTML = hours.toString().split('')[1];
  if (hours < 10 && hours >= 0) {
  hoursDecimal.innerHTML = 0;
  hoursSingularity.innerHTML = hours;
  textHours.innerHTML = "HOUR"
  }
  
  minutesDecimal.innerHTML = minutes.toString().split('')[0];
  minutesSingularity.innerHTML = minutes.toString().split('')[1]
  if (minutes < 10 && minutes >= 0 ) {
    minutesDecimal.innerHTML = 0;
  minutesSingularity.innerHTML = minutes
  textMinutes.innerHTML = "MINUTE"
  }
  
  secondsDecimal.innerHTML = seconds.toString().split('')[0];
  secondsSingularity.innerHTML = seconds.toString().split('')[1];
  if (seconds < 10 && seconds >= 0) {
    secondsDecimal.innerHTML = 0;
  secondsSingularity.innerHTML = seconds;
  textSeconds.innerHTML = "SECOND"

  if(hours == 0 && minutes == 0 && seconds == 0){
    clearInterval(interval)
    body.innerHTML = '';
    body.innerHTML = 'Time Over!'
    body.style.color = 'white';
    body.style.fontSize = '40px'
  }
  }
}

let interval;
function startClock() {
  interval = setInterval(countDown, 1000);
  }
  
function stopClock() {
  clearInterval(interval);
}
startClock();


stopBtn.addEventListener('click', stopClock);
playBtn.addEventListener('click', startClock);

