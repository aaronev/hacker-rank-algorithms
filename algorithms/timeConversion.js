// https://www.hackerrank.com/challenges/time-conversion/submissions/code/65812401

// Pass

function timeConversion(t) {  
  h = t[0]+t[1]
  d = t[8]+t[9]
  
  if (d == 'PM' && h !== '12') {
    h = String(12 + Number(t[0]+t[1]))
  }
  
  if (d == 'AM' && h === '12') {
    h = '00'
  }
  
  return `${h}:${t[3]+t[4]}:${t[6]+t[7]}`
}
