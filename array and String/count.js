exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  countCharinString: function (str) {
      str.length;
      return str;
  },
  removeRepeatedCharInString : function(str){
     // "hellotarun" => helotrun
     // remove duplicates
     var repSring = "";
      for(var i = 0; i < str.length; i++) {
         if(repSring.indexOf(str[i]) < 0) {
           repSring += str[i];
         }
       }
       return repSring;
  },
  compareTwoString : function(str1,str2){
     // write code for it
     // "hello" & hello are equal return true
     // hello & olleh not equal return false
     var compareTwoString = str1.localeCompare(str2);
     if (compareTwoString == 0) {
       console.log("true");
     } else {
       console.log("false");
     }
  },
  checkSubString : function(str1,str2){
    // check if str1 is subString of str2
    var t = str1.includes(str2);
    return t;
  },
  checkPalindrom : function(str1,str2){
    // check if str1,str2 are palindrom
  },
  stringReverse : function(str){
      retutn str.split('').reverse().join('');
  }
};
