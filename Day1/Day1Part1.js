
const data =  require("./data.js")

const dataArray = data.split('\n')
// console.log(dataArray)

dataArray.forEach((num, index) => {
  dataArray[index] = Number(num)
});

const findDepth = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] > arr[i]) {
      count++
    }
  }
  return count
}

const findDepthGroups = (arr) => {
  let count = 0;
  let currentSum = arr[0] + arr[1] + arr[2]
  for (let i = 1; i < arr.length; i++) {
    let nextSum = arr[i] + arr[i+1] + arr[i + 2]
    if ( nextSum > currentSum) {
      count++
    }
    currentSum = nextSum;
  }
  return count
}
console.log(findDepthGroups(dataArray))