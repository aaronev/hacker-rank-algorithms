// https://www.hackerrank.com/challenges/apple-and-orange/problem

// Passes

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var apps = 0, ors = 0
  
  for (let i = 0; i < apples.length; i++) {
    var pos = a + apples[i]
    if (pos >= s && pos <= t) apps++
  }
  //just for commit ticks
  for (let i = 0; i < oranges.length; i++) {
    var pos = b + oranges[i]
    if (pos >= s && pos <= t) ors++
  }
  
  console.log(`${apps}\n${ors}`)
  
}

