const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrFlat = matrix.flat();
  let result = 0;
  arrFlat.forEach((item) => {
    if (item === '^^') result++;
  });

  return result;
};
