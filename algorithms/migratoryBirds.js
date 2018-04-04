//https://www.hackerrank.com/challenges/migratory-birds/problem

//Passes all test cases

function migratoryBirds(n, ar) {
  var obj = {}
  var most = 0
  var res = 0

  for (let i = 0; i < ar.length; i++) {
    if (!obj[ar[i]]) obj[ar[i]] = 0
    obj[ar[i]]++ 
  }
  
  for (bird in obj) {
    if (obj[bird] > most) {
      most = obj[bird]
      res = bird
    } 
  }
  
  return res
}
