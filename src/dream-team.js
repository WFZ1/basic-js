const CustomError = require("../extensions/custom-error");

module.exports = members => {
  if (!members || typeof(members) !== 'object' || !members.length) return false;

  return members.map(el => {
    if (typeof(el) === 'string' && +el !== 0) {
      return el.replace(/\s/g, '')[0].toUpperCase(); // \s - space
    } else {
      return '';
    }
  }).sort().join('');
};
