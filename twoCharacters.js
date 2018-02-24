// https://www.hackerrank.com/challenges/two-characters/problem

// String  always consists of two distinct alternating characters. For example, if string 's two distinct characters are x and y, then t could be xyxyx or yxyxy but not xxyy or xyyx.

// You can convert some string  to string  by deleting characters from . When you delete a character from , you must delete all occurrences of it in . For example, if  abaacdabd and you delete the character a, then the string becomes bcdbd.

// Given , convert it to the longest possible string . Then print the length of string  on a new line; if no string  can be formed from , print  instead.

// Input Format

// The first line contains a single integer denoting the length of . 
// The second line contains string .

// Constraints

//  only contains lowercase English alphabetic letters (i.e., a to z).
// Output Format

// Print a single integer denoting the maximum length of  for the given ; if it is not possible to form string , print instead.

// Sample Input

// 10
// beabeefeab
// Sample Output

// 5
// Explanation

// The characters present in  are a, b, e, and f. This means that  must consist of two of those characters.

// If we delete e and f, the resulting string is babab. This is a valid  as there are only two distinct characters (a and b), and they are alternating within the string.

// If we delete a and f, the resulting string is bebeeeb. This is not a valid string  because there are three consecutive e's present.

// If we delete only e, the resulting string is babfab. This is not a valid string  because it contains three distinct characters.

// Thus, we print the length of babab, which is , as our answer.


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function removePairs(str) {
  var arr = str.split('')
  var rem = []
  
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i+1]) rem.push(str[i])
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (rem.includes(arr[i])) arr[i] = ''
  }

  var newStr = arr.join('')
  
  for (let i = 0; i < newStr.length - 1; i++) {
    if (newStr[i] === newStr[i+1]) return removePairs(newStr)
  }
  
  return newStr
}

function posSeqAndRemoveSingles(str) {
  var letters = {}
  var posSeq = []
  var res = []
  
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) letters[str[i]]++
    else letters[str[i]] = 1
  }
  
  for (let ltr in letters) {
    if (letters[ltr] !== 1) posSeq.push(ltr)
  }
  
  for (let i = 0; i < str.length; i++) {
    if (posSeq.includes(str[i])) res.push(str[i])
  }
  
  return [posSeq, res.join('')]
}

function twoCharaters(s) {

  //remove all pairs
  //remove all singles
  //find all possible sequences
    // --keep two what is the longest sequence
    // --has to be recursive to try all possible sequences
  
  var allPosLtrs = posSeqAndRemoveSingles(removePairs(s))[0]
  var shortenString = posSeqAndRemoveSingles(removePairs(s))[1]
  
  return posSeqAndRemoveSingles(removePairs(s))
  
}

function main() {
    var l = parseInt(readLine());
    var s = readLine();
    var result = twoCharaters(s);
    process.stdout.write("" + result + "\n");

}

