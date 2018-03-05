//https://www.hackerrank.com/challenges/alternating-characters/problem

//Passes

function alternatingCharacters(s){
  var remove = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i+1]) remove++
  }
  return remove
}
