const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  } else {
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || !isFinite(sampleActivity)) {
      return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  }
};
