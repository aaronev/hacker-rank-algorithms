//https://www.hackerrank.com/challenges/strong-password/problem

//Passses Test

function minimumNumber(n, password) {
  var err = 0
  var right = 0
  var numEx = 0
  var lcEx = 0
  var upEx = 0
  var scEx = 0
  var len = 0
  
  numbers = "0123456789"
  lower_case = "abcdefghijklmnopqrstuvwxyz"
  upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  special_characters = "!@#$%^&*()-+"
  
    nu = numbers.split('')
    lc = lower_case.split('')
    up = upper_case.split('')
    sc = special_characters.split('')
  
  for (let i = 0; i < password.length; i++) {
    if (nu.includes(password[i])) numEx++
    if (lc.includes(password[i])) lcEx++
    if (up.includes(password[i])) upEx++  
    if (sc.includes(password[i])) scEx++
  }
  
 
  if (numEx === 0) err++
  if (lcEx === 0) err++
  if (upEx === 0) err++
  if (scEx === 0) err++
  
  let i = password.length + err
  while (i < 6) {
    err++
    i++
  }
  return err
  
}