// https://www.hackerrank.com/challenges/pangrams/problem

// Passes all test 

process.stdin.on("end", function () {
  var alph = 'abcdefghijklmnopqrstuvwxyz'
  var l = 0
  var s = input.toLowerCase().split('')
  
  for (let i = 0; i < alph.length; i++) {
    if (s.includes(alph[i])) l++
  }
  
  if (l === 26) console.log('pangram')
  else console.log('not pangram')
  
});