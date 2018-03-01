//https://www.hackerrank.com/challenges/mars-exploration/problem

//Passes All Test

function marsExploration(s) {
  var count = 0
  
  for (let i = 0; i < s.length; i+=3) {
      if (s[i] !== 'S') count++
      if (s[i+1] !== 'O') count++
      if (s[i+2] !== 'S') count++
  }
  
  return count 
}