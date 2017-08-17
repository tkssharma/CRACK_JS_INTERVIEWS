function getMaxOccurence(string)
{
   // get array from string first remove spaces from it
   var string = string.replace(/ /g,'')
   var array = string.split('');
    // check array length
    if(array.length == 0)
      return null;

    // create hash map to see if elemnt exist or not if exist then increase its counter
    var hashMap = {};
    var maxChar = array[0], maxCount = 1;
    // loop on array for iteration
    for(var i = 0; i < array.length; i++)
    {
        var element = array[i];
        if(hashMap[element] == null)
            // its new elemnt add its value to 1 in map
            hashMap[element] = 1;
        else
           // its existing increase value by 1
            hashMap[element]++;
       // now finally if value is > max count we got new elemnt with max occurence
        if(hashMap[element] > maxCount)
        {
            maxChar = element;
            maxCount = hashMap[element];
        }
    }
    return maxChar;
}
