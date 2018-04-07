// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  //take the first value in the array
  //check to see if this value in the array exist
  //if it does then push it in a new array
  //remove the values that were paired 
  //move on to the next value of the array
  var match = []
  for (let i = 0; i < ar.lengtgh; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (ar[i] === arr[j]) {
        match.push(arr[i])
        ar[i] == ''
        ar[j] == ''
        return sockMerchant(n, ar.join('').split(''))
      }
    }
  }
  return match.length
}
