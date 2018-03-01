//https://www.hackerrank.com/challenges/caesar-cipher-1/problem

//Pass all test

function toEncryptCeasars(s, k) {
  var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lo = up.toLowerCase()
  
  if (k > 26) k = k%26
  
  if (up[up.indexOf(s)]) {
    if (up.indexOf(s) + k > 25) return up[up.indexOf(s) + k - 26]
    else return up[up.indexOf(s)+k]
  }
  
  if (lo[lo.indexOf(s)]) {
    if (lo.indexOf(s) + k > 25) return lo[lo.indexOf(s) + k - 26]
    return lo[lo.indexOf(s)+k]
  }
  
  return s
}

function caesarCipher(s, k) {
  if (k === 26) return s
  
  arr = []
  
  for (let i = 0; i < s.length; i++) {
    arr.push(toEncryptCeasars(s[i], k))
  }
  
  return arr.join('')
}
