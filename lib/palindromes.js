function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  function noSpaces(words) {
    return words.split(" ").join("")
  }
  return noSpaces(s) == noSpaces(stringReverse);
}

module.exports = isPalindrome;
