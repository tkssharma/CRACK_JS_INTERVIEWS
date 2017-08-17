function getBinaryMax(binary){
    if(binary.length == 0) return null;

	var len = binary.length;
	// 0,1,2 3,4,5
	// assumption that length of string is always event
	var _binary1st = binary.substr(0,len/2);
	var _binary2nd = binary.substr(len/2,len-1);
    console.log(_binary1st,_binary2nd)
	var digit1 = parseInt(_binary1st, 2);
    var digit2 = parseInt(_binary2nd, 2);
    consoel.log(digit1,digit2)
    if(digit1 > digit2) {
       return _binary1st
    }else{
       return _binary2nd
    }
}
