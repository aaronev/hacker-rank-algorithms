//https://www.hackerrank.com/challenges/grading/submissions/code/66142391

//Pass

function solve(g){

  var arr = []
  
  for (let i = 0; i < g.length; i++) {
    
    if (g[i] < 35) {
      arr.push(g[i])
    } else if (5 - (g[i] % 5) < 3) {
      arr.push(g[i]+(5 - (g[i] % 5)))
    } else arr.push(g[i])
  }
  
  return arr
}
