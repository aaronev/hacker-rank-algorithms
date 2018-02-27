// https://www.hackerrank.com/challenges/two-characters/problem

function removeOnes(str) {
  var letters = {}
  var posLtrs = []
  var res = []
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) letters[str[i]]++
    else letters[str[i]] = 1
  }
  for (let ltr in letters) {
    if (letters[ltr] !== 1) posLtrs.push(ltr)
  }
  for (let i = 0; i < str.length; i++) {
    if (posLtrs.includes(str[i])) res.push(str[i])
  }
  return res.join('')
}

function recurxRemovePairsAndOnes(str) {
  var arr = str.split('')
  var rem = []
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i+1]) rem.push(str[i])
  }
  for (let i = 0; i < arr.length; i++) {
    if (rem.includes(arr[i])) arr[i] = ''
  }
  var newStr = removeOnes(arr.join(''))
  for (let i = 0; i < newStr.length - 1; i++) {
    if (newStr[i] === newStr[i+1]) return recurxRemovePairsAndOnes(newStr)
  }
  return newStr
}

function sequence(ltr1, ltr2, str) {
  if (ltr1 === ltr2) return 0
  var len = 1
  var next = ltr2
  var prev = ''
  
  for (let i = str.indexOf(ltr1) ; i < str.length - 1; i++) {

    
    
    if (str[i] === next) {
      len++
      prev = next
      next = str[i]
    } 
    
  }
  
  return len
}

function twoCharacters(str) { 
  var s = recurxRemovePairsAndOnes(str)
  
  var seqLen = [0]
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i+1; j < s.length; j++) {
      seqLen.push(sequence(s[i], s[j], s))
    }
    var arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == s[i]) arr[i] = ''
    }
    twoCharacters(arr.join(''))
  }
  
  return seqLen.reduce((a,b) => Math.max(a,b))
}
