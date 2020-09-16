const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let code = []
  members.filter(e => typeof e === 'string').forEach(e => {
    e = e.trim()
    if (e.length) {
      if ((e[0] >= 'A' && e[0] <= 'Z') || e[0] >= 'a' && e[0] <= 'z') code.push(e[0].toUpperCase())
    }
  })
  return code.sort().join('')
};
