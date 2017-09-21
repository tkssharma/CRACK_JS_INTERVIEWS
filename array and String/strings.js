exports = typeof window === 'undefind' ? global : window;
exports.stringAnwsers = {
  compress: function(str) {
      var createObj = {};
      var saveRepeat = [];
      var compressedString = [];
      for(i=0;i <= str.length; i++) {
        var l = str.charAt(i);
        createObj[l] = (isNaN (createObj[l]) ? 1 : createObj[l] + 1);

      }
      for (var key in createObj) {
        saveRepeat.push(new Array(createObj[key]+1).join(key));
      }
      //console.log(repeat.length);
      for(j = 0; j < saveRepeat.length ;j++) {
         var getLength = saveRepeat[j].length;
         var firstChar = saveRepeat[j].charAt(0);
         var compressStr = firstChar+getLength;
         compressedString.push(compressStr);
      }
      compressedString.pop();
      console.log(compressedString.join(""));
  },
  wordWrap: function(str , cols) {
      var re = /.{1,20}/g;
      var breakString = str.match(re);
      //console.log(breakString);
      if(cols <= 1) {
        console.log(str);
      } else {
         for(i = 0; i < breakString.length; i++ ) {
          console.log(breakString[i]);
         }
      }
  },
  reverseString: function (str) {
    return str.split("").reverse().join("");
  }
};
