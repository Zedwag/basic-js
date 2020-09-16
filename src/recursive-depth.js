const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, curDepth = 1, maxDepth = 1) {
    maxDepth = Math.max(maxDepth, curDepth)
    arr.forEach(el => {
      if(Array.isArray(el)) maxDepth = Math.max(maxDepth, this.calculateDepth(el, curDepth+1, maxDepth))
    })
    return maxDepth
  }
};
