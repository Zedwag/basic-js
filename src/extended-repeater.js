const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options
  let output = ''
  for (let i = 0; i < repeatTimes; i++) {
    output += str
    for (let j = 0; j < additionRepeatTimes; j++) output += j === additionRepeatTimes - 1 ? addition : addition + additionSeparator
    output += i === repeatTimes - 1 ? '' : separator
  }
  return output
};
