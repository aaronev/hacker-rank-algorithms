// https://www.hackerrank.com/challenges/sock-merchant/problem

// Passes all Test

function sockMerchant(n, ar) {
//put all values into an object
//then count each object
//if object key value is even then divide by two and it is a pair

  var socks = {}
  
  for (let i = 0; i < ar.length; i++) {
    if (!socks[ar[i]]) socks[ar[i]] = 0
    socks[ar[i]]++
  }
  
  var res = 0
  
  for (let sock in socks) {
    if (socks[sock] % 2 === 0) res += (socks[sock]/2)
    if (socks[sock] % 2 === 1) res += ((socks[sock] - 1)/2)
  }
  
  return res
}
