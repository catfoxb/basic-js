const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var tmpStr = '';

  if (options.repeat === undefined) {
    options.repeat = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionRepeat === undefined) {
    options.additionRepeat= 1;
  }

  for (var i = 1; i <= options.repeat; i++) {
    tmpStr += str;
    for (var j = 1; j <= options.additionRepeat; j++) {
      tmpStr += (j !== options.additionRepeat) ? options.addition + options.additionSeparator : options.addition;
    }
    tmpStr += (i !== options.repeat) ? options.separator : '';
  }
  return tmpStr;
};
  