//a sample js function to test unit tester
exports.testFunction = function() {
	var equalstwo = 2;
	return equalstwo;
}


/*
Testing logic from the timer.js file
	test functions are set up logically the same as functions from timer.js
		location denotes end state given an input
		touched denotes where the function path as gone

*/




//Start testing application js functionality
exports.startTimerConditionals = function(timer, bool, breakNumber, bPerSession) {
	
	var location = 0;
	
	if (timer < 0 && bool == 0) {
		if(breakNumber >= bPerSession) {
			location = 2;
		} else {
			location = 3;
		}
	} else if (timer < 0 && bool == 1) {
		location = 1;
	}
	return location;
}


exports.onloadFunctionONEConditionals = function (run, index, sTime, bTime) {
	
	var touched = [0,0,0,0];
	
	if(run != null) {
		touched[0] = 1;
	}
	if(index != null) {
		touched[1] = 1;
		if(sTime == null) {
			touched[2] = 1;
		}
		if(bTime == null) {
			touched[3] = 1;
		}
	}
	return touched;
}


exports.onloadFunctionTWOConditionals = function (t1,t2,SA,SB,BN,LBT) {
	
	var touched = [0,0,0,0,0,0];
	
	if(t1 == null) {
		touched[0] = 1;
	}
	if(t2 == null) {
		touched[1] = 1;
	}
	if(SA == null) {
		touched[2] = 1;
	}
	if(SB == null) {
		touched[3] = 1;
	}
	if(BN == null) {
		touched[4] = 1;
	}
	if(LBT == null) {
		touched[5] = 1;
	}
	return touched;
}

