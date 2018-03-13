//https://www.hackerrank.com/challenges/separate-the-numbers/problem

function findNumbers(s) {
  
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) < Number(s[i+1]) && Number(s[i])+1 === Number(s[i+1])) {
      if (check)
    } 
  }
  
}

function separateNumbers(s) {
  var arr = []
  
  if (findNumbers(s)) arr.push(findNumbers(s))
  else return 'NO'
  
  return `YES ${arr[0]}`
}
