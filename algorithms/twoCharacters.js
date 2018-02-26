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

function lettersDataStructure(s) {
  var seq = {}
  
  for (let i = 0; i < s.length; i++) {
    seq[s[i]] = {}
  }
    
  //find a way to go through a string and add it
  let counter = 0
  
  while (counter < Object.keys(seq).length) {
    
    for (let i = 0; i < s.length; i++) {
      
      if (s[counter] === s[i]) {
        // if s[counter] equals s[i] then that's when you count the numbers that come after it
        // you start at the particular position s[i]
        for (let j = i+1; j < s.length; j++) {
          if (s[counter] !== s[j]) {
            if (seq[s[counter]][s[j]]) seq[s[counter]][s[j]]++
            else seq[s[counter]][s[j]] = 1
          } else {
            for (let ltrs in seq[s[counter]]) {
              if (seq[s[counter]][ltrs] && seq[s[counter]][ltrs] > 2) seq[s[counter]][ltrs] = 0
            }
            break
          }
        } 
      } 
    } 
    counter++
  }
  
  console.log(seq) 
  return seq
}

function twoCharacters(s) { 
  var newS = recurxRemovePairsAndOnes(s) 
  var dataStrtr = lettersDataStructure(newS)
  
  return dataStrtr
}