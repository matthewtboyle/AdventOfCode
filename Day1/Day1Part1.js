
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

console.log(findDepth(dataArray))