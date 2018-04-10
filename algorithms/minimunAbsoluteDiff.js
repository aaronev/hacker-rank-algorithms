//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(n, arr) {
    //get the largest number
    //get the secon largest number
    //subtract
    //if there are two numbers that are the same in the string, then substract them
    
  var fLargest = 0
  var sLargest = 0
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > fLargest) fLargest = arr[i]
      if (arr[i] < fLargest && arr[i] > sLargest) sLargest = arr[i]
    }
  
  return fLargest - sLargest
  
}