//https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s) {
  
  //Check if the first added by one equals the next number
  //Check the length of the added number and then check the next numbers in the string match the length
  
  var firstNum = Number(s[0]) 
  var fNumLen = firstNum.toString().length
  var secondNum = ''
  
  for(let i = 0; i < fNumLen; i++){
    secondNum += s[i+1]
  }
  
  if (firstNum+1 != secondNum) return 'NO'    
  return `YES ${firstNum}`
}
