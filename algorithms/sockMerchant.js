// https://www.hackerrank.com/challenges/sock-merchant/problem

function findMatching(val, arr) {
  for(let i = 0; i < arr.length; i++) {
    if (val === arr[i]) return val
  }
  return false
}

function sockMerchant(n, ar) {
  //add another step
  //take the first value in the array
  //check to see if this value in the array exist
  //if it does then push it in a new array
  //remove the values that were paired 
  //move on to the next value of the array
  var match = []
  
  for(let i = 0; i < ar.length; i++) {
    if (findMatching(ar[i], ar) && !match.includes(ar[i])) {
      match.push(findMatching(ar[0], ar[i]))
    }
  }
  
  return match.length
}
