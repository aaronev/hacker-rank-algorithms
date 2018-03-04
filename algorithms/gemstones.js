//https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr){
  var allGems = []
    for (let i = 0; i < arr.length; i++) {
      allGems.push(arr[i].split('').sort())
    }
  
  var shortest = allGems.map(el => el.length).reduce((a,b) => Math.min(a,b))
  var short = allGems.map(el => el.length)
  var shortIn = short.indexOf(shortest)
  
  var j = 0
  var res = 0
  
  while (j < shortest) {
    var haveIt = 0
    for (let i = 0; i < allGems.length; i++) {
      if (allGems[i].includes(allGems[shortIn][j])) haveIt++
    }
    if (haveIt === allGems.length) res++
    j++
  }

  return res
}