//https://www.hackerrank.com/challenges/reduced-string/problem

function super_reduced_string(s){
  
  var arr = s.split('')
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      arr[i] = ''
      arr[i+1] = ''
      return super_reduced_string(arr.join(''))
    } 
  }
  
  return arr.join('') || 'Empty String'
}