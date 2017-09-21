exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    if(a == b || a % b == 0) {
      console.log("this is or logical operator true part");
    }
    else {
      console.log("this is the false part");
    }
  },

  and: function(a, b) {
    if(a == b && a % b == 0) {
      console.log("both condition are true");
    } else {
      console.log("This is the second part when the condition is not true");
    }
  }
};
