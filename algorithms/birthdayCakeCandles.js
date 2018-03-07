//https://www.hackerrank.com/challenges/birthday-cake-candles/submissions/code/65474094

//Pass

function birthdayCakeCandles(n, ar) {
    var max = 0
    var count = 0
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i]
        }
    }    
    
    for (let i = 0; i < ar.length; i++) {
        if (max === ar[i]) {
            count++
        }
    }  
    return count
}
