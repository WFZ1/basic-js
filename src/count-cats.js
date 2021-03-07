const CustomError = require("../extensions/custom-error");

module.exports = matrix => {
  if (typeof(matrix) !== 'object' || matrix.lenght < 1) return 0;

  matrix = matrix.flat();
  let k = 0;
  
  matrix.forEach(el => {
    if (el === '^^') k++;
  });

  return k;
};
