//Find the intersection of two arrays. An intersection would be the common elements that exists //within both arrays. In this case, these elements should be unique!


var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // [2, 1]

function intersection(firstArray, secondArray) {
  // The logic here is to create a hashmap with the elements of the firstArray as the keys.
  // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
  // If it does exist, add that element to the new array.
 // array1 = [1,5,6,7,8];
 // array2 = [3,4,5,7,9];

  var hashmap = {};
  var intersectionArray = [];
  // assign 1 to all index in hashmap
  firstArray.forEach(function(element) {
    hashmap[element] = 1;
  });

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  // now just check if second array has that index available and should equal to 1 
  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}
