var obj = {t : 90};
undefined
var obj2 = obj
undefined
obj === obj2
true
//obj,obj2 =====> mem location => t = 90
undefined
obj = null;
null
obj2
{t: 90}
//--------------------------//
undefined
var obj1 = {t : 90};
undefined
var obj2 = Object.create(obj1);
undefined
obj1 === obj2
false