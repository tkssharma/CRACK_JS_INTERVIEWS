Basic Array method
callback function of map, filter, some, every, forEach has three parameters: elem, index, arr. And you can optionally pass "this" as second argument of these Array method.

forEach
forEach dont return anything. it just run the callback functionf or each element of the array


> [1,2,3].forEach(function(elem, index, arr){
    console.log(elem);
  });
  = 1
  = 2
  = 3


map
returns new array by executing the callback function for each elements of the array


> [1,2,3].map(function(elem, index, arr){
    return elem * elem;
  });
  = [1, 4, 9];
filter
if the condition is true for an element, element is picked for the return array


> [1,2,3,4,5,6,7].filter(function(elem, index, arr){
    return index % 2==0;
  });
  = [1, 3, 5, 7]
some
if any of element in the arrya fulfil the condition, some will return true else will return false


  >[1,2,3, 4].some(function(elem, index, arr){
    return elem >3;
  });
  = true;
every
it will return true if every elements in the array fulfil the condition. else return false


>[1,2,3, 4].every(function(elem, index, arr){
    return elem >3;
  });
  = false;

>[1,2,3, 4].every(function(elem, index, arr){
    return elem >0;
  });
  = true;
11.use build in function

> ["Happy", 0, "New", "", "Year", false].filter(Boolean);
  = ["Happy", "New", "Year"]

ref: es5 array extra

reduce
reduce cache the value. for example u want to get the sum of all the element. alternatively, you can initially


[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
})
 = 10

[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
}, 100)
 = 110

12. real length by reduce
talk about reduce here


> ["hello", , , , , "javaScript"].reduce(function(count){
    return count + 1;
  }, 0);
  = 2

13. check array

> typeof []
  = "object"
> typeof {}
  = "object"

> Array.isArray([]);
  = true
> Array.isArray({});
  = false

14. deal with Array-like objects

function foo(){
  console.log(arguments, 'len', arguments.length, '2nd', arguments[1])
}

foo(1, 2, 3,4)
 = [1, 2, 3, 4] "len" 4 "2nd" 2


function foo(){
  console.log(Array.isArray(arguments));
  arguments.push(5);
  console.log(arguments, 'len', arguments.length, '2nd', arguments[1])
}
foo(1, 2, 3,4)
 = false
 = TypeError: Object #<Object> has no method 'push'


function foo(){
  var args = Array.prototype.slice.call(arguments);
  args.push(5);
  console.log(args, 'len', args.length, '2nd', args[1])
}

foo(1, 2, 3,4)
 = [1, 2, 3, 4, 5] "len" 5 "2nd" 2

array method in string

var dd = 'that JS Dude';

dd.filter(function (el, idx){
  return idx>7;
})
 = TypeError: Object that JS Dude has no method 'filter'


[].filter.call(dd, function(el, idx){
 return idx>7;
})
 = ["D", "u", "d", "e"]
