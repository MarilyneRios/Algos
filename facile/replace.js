function replaceWord(str, oldWord, newWord) {
  // Insert your code here
  let result = str.replace(oldWord, newWord);
  return result;
}

function hideWord(str, word) {
  // Insert your code here
  let result = str.replace(word, "*".repeat(word.length));
  return result;
}

console.log(replaceWord('I hate JavaScript!', 'hate', 'love'));
// Expected: I love JavaScript!

console.log(hideWord('My password is qwerty', 'qwerty'));
// Expected: My password is ******


// Do not edit/remove code under this line
module.exports = { replaceWord, hideWord };
