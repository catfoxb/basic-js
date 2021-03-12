const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];

  if (!Array.isArray(members)) return false;

  members.forEach(item => {
    if (typeof item === 'string') {
      item = item.trim();
      result.push(item[0].toUpperCase())
    }
  });

  return result.sort().join('');
};
