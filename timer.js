function startTimer(duration, display, bt) {
    var timer = duration, minutes, seconds;
    var bool = 0;
    var breakNumber = 0;
    var audioFile = sessionStorage.getItem('audio');
    var alarm = new Audio(audioFile);


    //I tried to have two separate files, but it didn't work
    //var alarm = new Audio('alarm.mp3');
    //var break = new Audio('break.mp3');
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

	--timer;
/*
	if (timer < 0 && bool == 0) {
		timer = bt;
		bool = 1;
        } else if (timer < 0 && bool == 1) {
		timer = duration;
		bool = 0;
		breakNumer++;
	}
*/

	if (timer < 0 && breakNumber == 3) {
		timer = bt*3; //The length of the extended break should be 3 times BT, but it doesn't work
		bool = 0;
		breakNumer = 0;
		alarm.play();
	}
	if (timer < 0 && bool == 0) {
		timer = bt;
		bool = 1;
		alarm.play();
        } else if (timer < 0 && bool == 1) {
		timer = duration;
		bool = 0;
		breakNumer++;
		alarm.play();
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

	if (sessionStorage.getItem('audio') != null) {
		alarm = sessionStorage.getItem('audio');
	}
	else {
		alarm= 'alarm.mp3';
	}
	sessionStorage.setItem('audio', alarm);


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
        ad = document.getElementById("aud").value;
	bn = document.getElementById("breakN").value;
	sessionStorage.setItem('audio', ad);
	sessionStorage.setItem('breakNum', bn);
	window.location.assign("index.html");
    });
});
