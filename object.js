var obj = {};
var app = new Object();
var obj = { x: 80};

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false,
    enumerable : true,

  }
  // etc. etc.
});

var obj = { x: 80};
undefined
Object.freeze(obj);
{x: 80}
obj.x = 90;
90
console.log(obj)
VM4279:1 {x: 80}

//--------------------------------------//

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: false
  },
  'property2': {
    value: 'Hello',
    writable: true,
    enumerable : true,
    
  }
  // etc. etc.
});
{property2: "Hello", property1: true}
Object.getOwnPropertyDescriptor(obj.property1)
undefined
console.log(Object.getOwnPropertyNames(obj))
VM4747:1 (2) ["property1", "property2"]0: "property1"1: "property2"length: 2__proto__: Array(0)
undefined
console.log(Object.getOwnPropertyDescriptors(obj))
VM4818:1 {property1: {…}, property2: {…}}property1: {value: true, writable: false, enumerable: false, configurable: false}property2: {value: "Hello", writable: true, enumerable: true, configurable: false}__proto__: Object
undefined
obj.property1 = false;
false
obj.property1
true
//-----------------------------------------------------------//