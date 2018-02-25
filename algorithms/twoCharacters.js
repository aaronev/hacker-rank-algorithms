// https://www.hackerrank.com/challenges/two-characters/problem

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
