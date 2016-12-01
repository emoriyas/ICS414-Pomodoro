function startTimer(duration, display, bt) {
    var timer = duration, minutes, seconds;
    var bool = 0; // 0 = currently study time. 1 = currently break time
    var breakNumber = 0;
    var audiofile;
    var bPerSession = sessionStorage.getItem('breakNum');
    var longBreakTime = sessionStorage.getItem('longBreakTime') * 60;
    //var audioFile = sessionStorage.getItem('studyAudio');
    //var alarm = new Audio(audioFile);

    var studyAud = sessionStorage.getItem('studyAudio');
    var breakAud = sessionStorage.getItem('breakAudio');

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
	--timer;

	if (timer < 0 && bool == 0) { //going into break

		if (breakNumber >= bPerSession) { //checks for long break
			window.alert("Break Time");
			timer = longBreakTime;
			breakNumer = 0;
		} else {
			timer = bt;
			breakNumber++;
		}
		bool = 1;
		playAudio(breakAud);
        } else if (timer < 0 && bool == 1) { //going into study
		timer = duration;
		window.alert("Study Time");
		bool = 0;
		playAudio(studyAud);
	}
		
		
    }, 1000);
}
 

window.onload = function () {
    if (window.location.href.match('runningTimer.html') != null) {
		sTime = sessionStorage.getItem('t1') * 60;
		bTime = sessionStorage.getItem('t2') * 60;
		display = document.querySelector('#time');
		startTimer(sTime, display, bTime);
	}
};

	
$(document).ready(function(){
    $("#Start").click(function() {


	//checks if any of the variables are null, if they are set to the default value
	if (sessionStorage.getItem('t1') != null) {
        	sTime = sessionStorage.getItem('t1');
	}
	else {
		sTime = 25;
		
	}
	sessionStorage.setItem('t1', sTime);

	if (sessionStorage.getItem('t2') != null) {
		bTime = sessionStorage.getItem('t2');
	}
	else {
		bTime = 5;
	}
	sessionStorage.setItem('t2', bTime);

	if (sessionStorage.getItem('studyAudio') == null) {
		sessionStorage.setItem('studyAudio', 'alarm.mp3');
	}

	if (sessionStorage.getItem('breakAudio') == null) {
		sessionStorage.setItem('studyAudio', 'alarm.mp3');
	}

	if (sessionStorage.getItem('longBreakTime') == null) {
		sessionStorage.setItem('longBreakTime', 30);
	}


        //sTime = sessionStorage.getItem('t1');
	//bTime = sessionStorage.getItem('t2');
	window.location.assign("runningTimer.html");
    });
});

$(document).ready(function(){
    $("#Set").click(function() {
        sTime = document.getElementById("num1").value;
	bTime = document.getElementById("num2").value;
	$("#t1").empty();
	$("#t2").empty();
	$("#t1").append(sTime);
	$("#t2").append(bTime);
	sessionStorage.setItem('t1', sTime);
	sessionStorage.setItem('t2', bTime);
    });
});


/*
basically sets the audio file name and how many numbers of breaks to go through
before going on the long break
*/

$(document).ready(function(){
    $("#setting").click(function() {
        sa = document.getElementById("sa").value;
        ba = document.getElementById("ba").value;
	bn = document.getElementById("breakN").value;
	lb = document.getElementById("lb").value;
	sessionStorage.setItem('studyAudio', sa);
	sessionStorage.setItem('breakAudio', ba);
	sessionStorage.setItem('breakNum', bn);
	sessionStorage.setItem('longBreakTime', lb);
	window.location.assign("index.html");
    });
});

/*
This method will play the audio
*/
function playAudio(audioFile) {
	var audio = new Audio(audioFile);
	//var audio = new Audio('alarm.mp3');
	audio.play();
}