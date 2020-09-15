const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let catsCounter = 0
  arr.forEach(row => row.forEach(el => el == '^^' ? catsCounter++ : 1))
  return catsCounter
};
