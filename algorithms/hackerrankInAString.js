//https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

//Passes All Test

function hackerrankInString(s) {
    var h = 'hackerrank'
    var l = 0
    let j = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] === h[j]) {
        l++
        j++
      }
    }
  if (l === h.length) return 'YES'
  return 'NO'
}
