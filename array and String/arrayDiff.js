function diffFromArray(array1,array2){
   var map = {};
   var out = [];
   if(array1.length == 0 || array2.length === 0 ){
     return null
   };
   array1.forEach(function(element){
       map[element] = 1;
   });
   array2.forEach(function(element){
    if(map[element] === 1){
       // do nothing we are good here element exist in both array
    }else{
      out.push(element)
    }
   });
   return out;
}

//diffFromArray([1,2,3],[7,2,4,5,6,7]);
//(5) [7, 4, 5, 6, 7]
//diffFromArray([1,2,3],[1,2,4,5,3]);
//(2) [4, 5]
