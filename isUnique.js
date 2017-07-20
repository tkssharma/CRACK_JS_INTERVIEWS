// check for duplication in array 
[1,2,3,4,5,1,2,3];
function checkUnique(arr){
	var map = {},i;
	for(var i = 0; i<arr.length ; i++){
		if(map[arr[i]]){
			return false;
		}
		map[arr[i]] = true;
	}
	return true;
} // remove duplicated from array // 
function removeDups(array){
	var temp = {};
	for(var i =0;i<array.length ; i++){
		temp[array[i]] = true;
	}
	var out = [];
	for(var k in temp){
		out.push(k);
	}
	return out
}

