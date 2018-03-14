//https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s) {
  
  //Check if the first added by one equals the next number
  //check the length of the added number and then check the next numbers in the string match the length
  //
  
  var firstNum = (Number(s[0])+1).toString() 

  for(let i = 1; i < firstNum.length; i++){
    
  }
  
  var arr = []
  
  var i = 0
  
  for(let i = 0; i < s.length; i++){
    
  }
  
  while (i < arr.length) {
    if (arr[i] < arr[i+1]) i++
    else return separateNumbers(s.split(''))
    return 'NO'
  }
  
  
  return `YES ${arr[0]}`
}
