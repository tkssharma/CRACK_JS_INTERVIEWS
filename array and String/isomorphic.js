For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.
isIsomorphic("egg", 'add'); // true
isIsomorphic("paper", 'title'); // true
isIsomorphic("kick", 'side'); // false

function isIsomorphic(firstString, secondString) {

  // Check if the same lenght. If not, they cannot be isomorphic
  if (firstString.length !== secondString.length) return false

  var letterMap = {};

  for (var i = 0; i < firstString.length; i++) {
    var letterA = firstString[i],
        letterB = secondString[i];

    // If the letter does not exist, create a map and map it to the value
    // of the second letter
    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB;
    } else if (letterMap[letterA] !== letterB) {
      // Eles if letterA already exists in the map, but it does not map to
      // letterB, that means that A is mapping to more than one letter.
      return false;
    }
  }
  // If after iterating through and conditions are satisfied, return true.
  // They are isomorphic
  return true;
}
