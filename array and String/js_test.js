
/* 
  Write a function which reverses the passed string
*/

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

/* 
  Write a function which removes the passed delimiter from the string.
  e.g. 'a-b-c'.removeDelimiter('-') should return 'abc'
*/

String.prototype.removeDelimiter = function(delimiter) {
var regex = new RegExp('-', 'g');
   return this.replace(regex,'' );
}

/*
  Write a function which return the multiplication of three numbers.
  The function can be called in any of the following forms:
  
  multiply(2, 3, 4) => 24
  multiply(2, 3)(4) => 24
  multiply(2)(3, 4) => 24
  multiply(2)(3)(4) => 24
*/

const multiply = (...args) => {
let vals =  [].concat(args);
 
 if(vals.length  ===3){
   return  vals.reduce((ac, val)=>{return ac*val;},1)
  }

 const curry = (...args) => {
     vals = vals.concat(args);
     if(vals.length !==3){
       return curry;
     }
     return multiply(...vals);
 }
 return curry;
};

/*
  write a function to check if the two object passed are equal or not.
  the objects can be nested.
*/  

const areEqualObjs = (obj1, obj2) => {
  if(obj1 === obj2){
    return true
  }
  else if(obj1 === null || obj2 === null){
    return false;
  }
  else if(obj1 && obj2){
    return  JSON.stringify(obj1) ===  JSON.stringify(obj2)
  }
}

/*
  write a function to faltten the array
*/
// [1,2,3,[4,5,6],[1,2,3,4]]
// [1,2,3,4,5,6,1,2,3,4]
Array.prototype.flatten = function() {

return this.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten(): toFlatten);
  }, []);
};

//Test cases 

describe('reverseString', () => {
  it('reverses the passed string', () => {
    expect(reverseString('')).toBe('');    
    expect(reverseString('abcde')).toBe('edcba');
  });
});

describe('removeDelimiter', () => {
  it('removes the passed delimiter from the string', () => {
    expect(reverseString('')).toBe('');    
    expect("Equal-Experts".removeDelimiter('-')).toEqual('EqualExperts');
  });
});

describe('multiply', () => {
  it('curries the multiply for three arguments', () => {
    expect(multiply(2, 3, 4)).toBe(24);
    expect(multiply(2, 3)(4)).toBe(24);
    expect(multiply(2)(3, 4)).toBe(24);
    expect(multiply(2)(3)(4)).toBe(24);
  });
});

describe('areEqualObjs', () => {
  it('compares the objects', () => {
    expect(areEqualObjs({
      a: 1,
      b: 2
    }, {
      a: 1,
      b: 2
    })).toBeTruthy();
    
    expect(areEqualObjs({
      a: 1,
      b: 2
    }, {
      a: 1,
      b: 3
    })).toBeFalsy();
    
    expect(areEqualObjs({
      a: 1,
      b: 2
    }, {
      a: 1
    })).toBeFalsy();
    
    expect(areEqualObjs({
      a: {
       b: 1 
      }
    }, {
      a: {
        b: 1
      }
    })).toBeTruthy();
    
    expect(areEqualObjs({
      a: {
       b: 1 
      }
    }, {
      a: {
        b: 2
      }
    })).toBeFalsy();
    
    expect(areEqualObjs({
      a: {
       b: 1,
       c: {
         d: 2
       }
      }
    }, {
      a: {
        b: 1,
        c: {
          d: 3
        }
      }
    })).toBeFalsy();
    
    expect(areEqualObjs({
      a: {
       b: 1,
       c: {
         d: {
           e: 2
         }
       }
      }
    }, {
      a: {
        b: 1,
        c: {
          d: {
            e: 2
          }
        }
      }
    })).toBeTruthy();
  })
});

describe('flattenArray',() => {
  it('flattens the passed array', () => {
    expect([].flatten()).toEqual([]);
    expect([1, 2].flatten()).toEqual([1, 2]);
    expect([1, [2]].flatten()).toEqual([1, 2]);
    expect([1, [2, 3]].flatten()).toEqual([1, 2, 3]);
    expect([[1], [2], [3], [4], [5]].flatten()).toEqual([1, 2, 3, 4, 5]);    
    expect([1, 2, [3, [4, 5, 6]], [7, 8]].flatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect([1, [2, [3, [4, [5, [6, [7, [8]]]]]]]].flatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});






