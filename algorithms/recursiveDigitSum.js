//https://www.hackerrank.com/challenges/recursive-digit-sum/problem

//Passes all test

function digitSum(n, k) {
  var sum = 0
  for (let j = 0; j < n.length; j++) {
    sum+=(Number(n[j]))
  }
  
  sum *= k
  
  if (sum.toString().length > 1) return digitSum(sum.toString(), 1)
  return sum
}

