// Your script here.
var countdownInterval;
var countdownEndTime;
let date = new Date();
var startButton = document.getElementById('startButton');

function startCountDown (){
	let inputValue = document.getElementById("userInput");
    let countdownDisplay = document.getElementById("countDown");
	let endTimeDisplay = document.getElementById("endTime");
	
	clearInterval(countdownInterval);
	var durationInMinutes = parseInt(inputValue.value);
	var now = new Date();
	countdownEndTime = new Date(now.getTime() + durationInMinutes * 60000);

	countdownInterval = setInterval(function() {
    // Get the current time
    var currentTime = new Date().getTime();
    
    // Calculate the time remaining
    var timeRemaining = countdownEndTime - currentTime;
    
    // If the countdown has ended
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "Countdown finished!";
      endTimeDisplay.textContent = "";
      return;
    }
    
    // Calculate the minutes and seconds remaining
    var minutes = Math.floor(timeRemaining / 60000);
    var seconds = Math.floor((timeRemaining % 60000) / 1000);
    
    // Format the remaining time as MM:SS
    var remainingTime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    
    // Display the remaining time and the countdown end time
    countdownDisplay.textContent = "Time remaining: " + remainingTime;
    endTimeDisplay.textContent = countdownEndTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }, 1000);
}
	


startButton.addEventListener('click', startCountDown);
