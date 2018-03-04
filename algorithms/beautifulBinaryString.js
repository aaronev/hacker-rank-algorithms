//https://www.hackerrank.com/challenges/beautiful-binary-string/problem

//Pass

function beautifulBinaryString(b) {
  var no = '010'
  var res = 0
  for (let i = 0; i < b.length-2; i++) {
    if (b[i] === no[0]) {
       if (b[i+1] === no[1]) {
         if (b[i+2] === no[2]) res ++
         i = i+2
      }
    }
  }
  return res
}
