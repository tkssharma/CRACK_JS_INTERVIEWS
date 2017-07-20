// check if given number is prime or not //
function isPrime(n){
	var _isPrime = n != 0;
	for(i=2 ; i < n ; i++){
		if(n%1 === 0){
			_isPrime = false;
		}
	}
	return _isPrime;
}