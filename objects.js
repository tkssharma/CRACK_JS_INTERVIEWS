// remove duplicate from array 

function removeDups(arr){
	var exists = {};
	var out =[];
	var elm

	for(var i =0;i<arr.length ; i++){
		elm = arr[i];
		if(! exists[elm]){
            out.push(elm);
            exists[elm] = true;
		}
	}
	return out;
}