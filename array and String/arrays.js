exports = typeof window === 'undefined' ? global : window;
// complete all other methos
// you can execute this from console
exports.arraysAnswers = {
  indexOf: function(arr, item) {
	  return arr.indexOf(item);
  },

  sum: function(arr) {
	  var ab=0;
	  arr.forEach(function(item,arr,index){
		  ab=ab+item;
	  });
	  return ab;
  },

  remove: function(arr, item) {
    var params=arguments;
    var paramLength=params.length;
    var itemIndex,itemToRemove;
    while(paramLength>1 && arr.length){
      itemToRemove=params[--paramLength];
      while((itemIndex=arr.indexOf(itemToRemove)) !== -1){
        arr.splice(itemIndex,1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var params=arguments;
    var paramLength=params.length;
    var itemIndex,itemToRemove;
    while(paramLength>1 && arr.length){
      itemToRemove=params[--paramLength];
      while((itemIndex=arr.indexOf(itemToRemove)) !== -1){
        arr.splice(itemIndex,1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    arr1=arr1.concat(arr2);
    return arr1;
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
    arr.length;
    return arr;
  },

    duplicates: function(arr) {
        var t = [];
        for(i= 0; i < arr.length; i++){
            var count =0;
            for(j = 0; j < arr.length; j++) {
                if(arr[j] == arr[i]) {
                    count++;
                }
            }
            if(count > 1) {
                console.log("value ---  " + arr[i] + " counter --  "  + count);
            }
        }
    },
  removeAllduplicates: function(arr) {
      var cleanArray = [];
      for(var i = 0; i < arr.length; i++) {
          let element = arr[i];
          if (cleanArray.indexOf(element) === -1) {
            cleanArray.push(element);
          }
      }
      console.log(cleanArray);
  },

  findAllOccurrences: function(arr, target) {
   // count occrence of all elements  in array
  }
};
