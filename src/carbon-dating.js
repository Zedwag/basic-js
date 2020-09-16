const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD

module.exports = function dateSample(sampleActivity) {
  let A = sampleActivity
  if (typeof A === 'number') return false
  if (typeof A === 'string') A = parseFloat(A)
  if (typeof A !== 'number' || isNaN(A) || A <= 0 || A >= 15) return false
  let N = A / k
  let N0 = MODERN_ACTIVITY * N / A
  let t = Math.log(N0/N)/k
  return Math.ceil(t)
};
