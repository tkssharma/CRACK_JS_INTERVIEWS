exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {
    return num.toString(2);
  },

  multiply: function(a, b) {
     var c = a * b;
     return c;
  }
};
