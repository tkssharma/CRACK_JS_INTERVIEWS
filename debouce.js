function debouce(fn, delay){
    var timer = null
    return  function(){
    let content = this;
     var args = arguments;
     clearTimeout(timer);
     timer = setTimeout(()=>{
        fn.apply(this,arguments)
     },delay)
  }
}
// function to be called when user scrolls
function foo() {
  console.log('You are scrolling!');
}
var app = document.getElementsByTagName('app');
app.addEventListener('click', debouce(fn,200));
