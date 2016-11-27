function startTimer(duration, display, bt) {
    var timer = duration, minutes, seconds;
    var bool = 0;
    var breakNumber = 0;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
	//display.textContent = bool;
/*
        if (--timer < 0) {
            timer = duration;
        }
*/
	--timer;

	if (timer < 0 && bool == 0) {
		timer = bt;
		bool = 1;
        } else if (timer < 0 && bool == 1) {
		timer = duration;
		bool = 0;
		breakNumer++;
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
        sTime = sessionStorage.getItem('t1');
		bTime = sessionStorage.getItem('t2');
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