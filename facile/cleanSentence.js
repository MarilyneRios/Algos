function cleanSentence(str) {
     
    const pattern = /[;@,'^'*'!#]/gi
    return str.replace(pattern, '');
}


const sentence = "J@av@aScri^pt i*s m!y @frie'nd!";
const result = cleanSentence(sentence);
console.log(result)
// Expected : JavaScript is my friend