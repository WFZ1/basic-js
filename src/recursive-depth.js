const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const new_arr = arr.map(el => {
      if(Array.isArray(el)) return this.calculateDepth(el) + 1 
      return 1;
    });

    return new_arr.length ? Math.max(...new_arr) : 1;
  }
};