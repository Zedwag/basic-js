const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error()
  let newArr = []
  let idxArr = new Array(arr.length)
  idxArr.fill(0)
  arr.forEach((el, idx) => {
    if (el === '--discard-next') idx !== arr.length-1 ? idxArr[idx+1] = -5 : 1
    else if (el === '--discard-prev') idx !== 0 ? idxArr[idx-1]-- : 1
    else if (el === '--double-next') idx !== arr.length-1 ? idxArr[idx+1]++ : 1
    else if (el === '--double-prev') idx !== 0 ? idxArr[idx-1]++ : 1
    else idxArr[idx]++
  })
  idxArr.forEach((el, idx) => {
    if (el > 0) for (let i = 0; i < el; i++) newArr.push(arr[idx])
  })
  return newArr
};
