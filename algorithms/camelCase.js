// https://www.hackerrank.com/challenges/camelcase/problem

//Pass

function camelcase(s) {
  var res = 1
  var cap = [
    'A', 
    'B', 
    'C', 
    'D', 
    'E', 
    'F', 
    'G', 
    'H', 
    'I', 
    'J', 
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  
  for (let i = 0; i < s.length; i++) {
    if (cap.includes(s[i])) res++
  }
  
  return res
}