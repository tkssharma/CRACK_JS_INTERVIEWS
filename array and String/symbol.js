function SimpleSymbols(str) { 

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {
    
    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') { 
        return false;
      }

    }
 
  }

  return true;
  
}