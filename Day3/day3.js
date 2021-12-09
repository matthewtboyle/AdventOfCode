const data = require('./data3.js')

const dataArray = data.split('\n')
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

const mostCommonBit = (arr, index) => {
  let ones = 0
  let zeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] === '1') {
      ones++
    }
    if (arr[i][index] === '0') {
      zeros++
    }
  }
  if (ones >= zeros) {
    return '1'
  } else {
    return '0'
  }
}

const leastCommonBit = (arr, index) => {
  let ones = 0
  let zeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] === '1') {
      ones++
    }
    if (arr[i][index] === '0') {
      zeros++
    }
  }
  if (zeros <= ones) {
    return '0'
  } else {
    return '1'
  }
}

const findOg = (arr, index) => {
  let oxygen = [];
  if (arr.length === 1) {
    return convertBinaryToNumber(arr[0])
  }
  let targetNum = mostCommonBit(arr, index)
  // debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] === targetNum) {
      oxygen.push(arr[i])
    }
  }
  // debugger;
  return findOg(oxygen, index + 1)
}

const findScrubber = (arr, index) => {
  let scrubber = [];
  if (arr.length === 1) {
    return convertBinaryToNumber(arr[0])
  }
  let targetNum = leastCommonBit(arr, index)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] === targetNum) {
      scrubber.push(arr[i])
    }
  }

  return findScrubber(scrubber, index + 1)
}

const diagnosticReport = (arr) => {
  let scrubber = findScrubber(arr, 0)
  let OG = findOg(arr, 0)
  return scrubber * OG
}

console.log(diagnosticReport(dataArray))