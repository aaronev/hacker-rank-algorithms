//https://www.hackerrank.com/challenges/gem-stones/problem

//passes all test

function gemstones(arr){
  var gemstones = 0
  var lengthArr = arr.map(el => el.length)
  var leastL= lengthArr.reduce((el1, el2) => Math.min(el1, el2))
  var lstInd = lengthArr.indexOf(leastL)
  
  var lettersOnce = arr[lstInd].split('').filter((el, index, self) => {
    if (index === self.indexOf(el)) return el
  })
    
  for (let i = 0; i < lettersOnce.length; i++) {
    var res = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].split('').includes(lettersOnce[i])) res++
    }
    if (res === arr.length) gemstones++
  }
  
  return gemstones
  
}