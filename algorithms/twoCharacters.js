// https://www.hackerrank.com/challenges/two-characters/problem

// passes all test cases

function posSeqLength(a, b, s) {
  var l = 0
  if (a === b) return l
  for (let i = 0; i < s.length; i++) {
    if (s[i] === a) {
      l++
      a = b
      b = s[i]
    } else if (s[i] === b) return 0 
  }
  
  return l
}

function twoCharacters(s) { 
  var l = [0]
  var q = 0
  if (!s) return 0
  while (q < s.length) {
    if (s[q] !== s[1]) {
      for (let j = s.indexOf(s[q])+1; j < s.length; j++) {
        l.push(posSeqLength(s[q], s[j], s))
      }

    } else if (s[0] === s[1]) {
      var arr = s.split('')
      for (let i = 0; i < arr.length; i++) {
        if (s[0] === arr[i]) arr[i] = ''
      }
      return twoCharacters(arr.join(''))
    }
    q++
  }
  return l.reduce((a,b) => Math.max(a,b))
}
