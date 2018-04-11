//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

//Passes all test

function minimumAbsoluteDifference(n, arr) {
  var min = arr.sort()[arr.length-1]
  
  for (let i = 0; i < arr.length/2; i++) {
    for (let j = i+1; j < arr.length/2; j++) {
      if (arr[i] === arr[j]) return 0
      if (Math.abs(arr[i] - arr[j]) < min) min = Math.abs(arr[i] - arr[j])
      
    }
  }
  
  return min
}
