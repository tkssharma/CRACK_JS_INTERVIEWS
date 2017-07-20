function filter(arr,fn){
	var out = [];
	for(var i =0; i< arr.length ; i++){
		if(fn(arr[i])){
			out.push(arr[i])
		}
	}
	return out;
}