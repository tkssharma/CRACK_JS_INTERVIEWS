exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var number = /\d+/g;
    var  t = str.match(number);
    if(t != null) {
      console.log('Contain number');
    } else {
      console.log("there is no number exit");
    }
  },

  containsRepeatingLetter: function(str) {
    var regx = /([a-zA-Z]).*?\1/;
    var repeatletter = str.match(regx);
    console.log(repeatletter);

  },

  endsWithVowel: function(str) {
    var vowel = ['a','e','i','o','u'];
    for(i = 0; i < vowel.length; i++) {
      var t = str.endsWith(vowel[i]);
      if(t == true) {
       console.log(t);
      }
    }
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
