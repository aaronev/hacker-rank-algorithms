//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// Passes all test
function divisibleSumPairs(n, k, ar) {
  var valid = 0
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      if (((ar[i] + ar[j]) % k) === 0) valid++
    }
  }
  return valid
}