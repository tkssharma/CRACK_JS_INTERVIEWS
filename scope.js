
var x = 90;

function hello(){

   var x = 100;
   console.log(x); 


}
hello()
// check value in scope of function first 
// check value outside or in global scope 

//-----------------------------------------//

function hello(){
   var x = 100;
    // function level scope 
   if(true){
       x =80;
   }
// console.log(x);
// x will be 80 here 
}
//----------------------------------//
function hello(){// 
   console.log(x);
   // undefined 
   // function level scope 
   // console.log(x);
  // x will be 80 here
  // hoisting of variables 
  var x = 70; 
}
//------------------------------------//
var x = 90 ;
function hello(){ // i know i have x inside me 
  console.log(x); // ?? // x === 90 
  
  var x = 70;  // function also have same variable 
}


