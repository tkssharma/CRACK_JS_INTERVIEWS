([1,2,3,5,6,7])
i => 0 to n-1
j => i+1 to n 

function topSum(arr){
	var biggest = arr [0];
	second = arr[1];
	len = arr.length;
	i= 2;
	if(len < 2){return null;}

	if(bigget < second ){
		biggest = arr[1];
		second = arr[0]
	}
	for(;i< len ; i++){
		if(arr[i] > biggest){
			second = boggest ;
			biggest = arr[i];
		}else if(arr[i] > second){
			second = arr[i];
		}
	}
	return biggest + second;
}