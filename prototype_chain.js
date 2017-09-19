var obj1 = {a : 100};
undefined
var obj2 = Object.create(obj1);
undefined
obj2.b = 90;
90
var obj3 = Object.create(obj2);
undefined
obj3.a
100
obj3
{}__proto__: b: 90__proto__: a: 100__proto__: constructor: ƒ Object()arguments: nullassign: ƒ assign()caller: nullcreate: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()__proto__: ƒ ()[[FunctionLocation]]: <unknown>hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
obj1.a = 70;
70
obj3
{}__proto__: b: 90__proto__: a: 70__proto__: Object
obj3.a = 10;
10
obj3.a
10
obj3.b
90
obj3
{a: 10}a: 10__proto__: b: 90__proto__: Object

//----------------------------------------------------------------//


function hello(){}
undefined
hello.prototype.sayhello = function(){consoel.log('logging from function hello')};
ƒ (){consoel.log('logging from function hello')}
hello
ƒ hello(){}
console.dir(hello);
VM6819:1 ƒ hello()arguments: nullcaller: nulllength: 0name: "hello"prototype: sayhello: ƒ ()arguments: nullcaller: nulllength: 0name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM6692:1[[Scopes]]: Scopes[1]constructor: ƒ hello()arguments: nullcaller: nulllength: 0name: "hello"prototype: {sayhello: ƒ, constructor: ƒ}__proto__: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ThrowTypeError()set arguments: ƒ ThrowTypeError()get caller: ƒ ThrowTypeError()set caller: ƒ ThrowTypeError()__proto__: Object[[FunctionLocation]]: <unknown>[[FunctionLocation]]: VM6589:1[[Scopes]]: Scopes[1]__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM6589:1[[Scopes]]: Scopes[1]
undefined
function hello2(){}
undefined
console.dir(hello2);
VM6969:1 ƒ hello2()arguments: nullcaller: nulllength: 0name: "hello2"prototype: constructor: ƒ hello2()__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM6905:1[[Scopes]]: Scopes[1]
undefined
hello2.prototype = hello.prototype;
{sayhello: ƒ, constructor: ƒ}
console.dir(hello2);
VM7013:1 ƒ hello2()arguments: nullcaller: nulllength: 0name: "hello2"prototype: sayhello: ƒ ()constructor: ƒ hello()__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM6905:1[[Scopes]]: Scopes[1]
undefined
var obj = new hello2();
undefined