const data = require('./data3.js')

const dataArray = data.split('\n')
console.log(dataArray)

// while the count is less than element.length

const diagnostic = (arr) => {
  var gammaRate = ''; //most
  var epsilonRate = ''; //least
  var count = 0
  while (count < arr[0].length) {
    var ones = 0;
    var zeros = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][count] === '1') {
        ones++
      } else {
        zeros++
      }
    }
    if (ones > zeros) {
      gammaRate += '1'
      epsilonRate += '0'
    } else {
      gammaRate += '0'
      epsilonRate += '1'
    }
    count++
  }
  gammaRate = convertBinaryToNumber(gammaRate)
  epsilonRate = convertBinaryToNumber(epsilonRate)
  return gammaRate * epsilonRate
};

const convertBinaryToNumber = (str) => {
  let multiplier = 1;
  let result = 0
  for (var i = str.length - 1; i >= 0; i--) {
    let product = Number(str[i] * multiplier)
    result += product;
    multiplier *= 2;
  }
  return result;
}
// console.log(convertBinaryToNumber('011011110000'))
// console.log(diagnostic(dataArray))