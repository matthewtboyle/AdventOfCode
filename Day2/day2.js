const data = require('./data2.js')

const makeTuple = (str) => {
  let array = str.split('\n')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(' ')
  }
  for (let i = 0; i < array.length; i++) {
    array[i][1] = Number(array[i][1])
  }
  return array;
}

const arrayTuple = makeTuple(data)

const moveSub = (arr) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current[0] === 'forward') {
      horizontal += current[1]
      depth += aim * current[1]
    }
    if (current[0] === 'down') {
      aim += current[1]
    }
    if (current[0] === 'up'){
      aim -= current[1]
    }
  }
  return horizontal * depth
}

console.log(moveSub(arrayTuple))