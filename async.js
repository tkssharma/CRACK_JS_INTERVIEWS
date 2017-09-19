setTimeout(function(){console.log('hello world')},2000);

function hello(fn){
  
  if(typeof fn === 'function'){
     fn('hello');
  }
}