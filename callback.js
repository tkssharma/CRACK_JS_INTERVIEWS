
function getInput(options, fn) {
    // 2 sec 
    // async task 
    // Make sure the callback is a function​
    if (typeof fn === "function") {
    // Call it, since we have confirmed it is callable​
        fn(data);
    }
}

getInput({x:90},function(data){
	console.log(data)
})



