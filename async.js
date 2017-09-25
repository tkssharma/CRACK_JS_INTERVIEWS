function findIfDigitIsPresent(thisNumber) {
	var  DIGIT_TO_FIND = 4;
	console.log(thisNumber);
	while (thisNumber !== 0) {

		console.log(thisNumber);

	    var thisDigit = thisNumber % 10;
	    thisNumber = thisNumber / 10;

	    if (thisDigit === DIGIT_TO_FIND) {
	        return true;
	    }
	}
	return false;
}


function odoMeter() {
	var  NUMBER = 56287;
	var increment = 0;
	for(var i = 1; i <= NUMBER; i++) {

		(function (i) {
    setTimeout(function () {
			var tmp = findIfDigitIsPresent(i);
			 if(tmp) {
				increment = increment + 1;
			 }
      }, 0);
   })(i);
	}
	console.log(NUMBER - increment)
}
odoMeter();
