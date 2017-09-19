
function add(x){
  return function(y){
     return x+y;
   }
}
var addition = add(5);
addition(6);
