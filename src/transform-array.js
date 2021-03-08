const CustomError = require("../extensions/custom-error");

module.exports = arr => {
  if (typeof(arr) !== 'object') throw new Error('arr isn\'t array!');

  const controls = {
    discard_next: '--discard-next',
    discard_prev: '--discard-prev',
    double_next: '--double-next',
    double_prev: '--double-prev'
  }

  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case controls.discard_next:
        i++;
        break;
      case controls.discard_prev:
        if (arr[i-2] !== controls.discard_next) new_arr.pop();
        break;
      case controls.double_next:
        if (i !== arr.length - 1) new_arr.push(arr[i+1]);
        break;
      case controls.double_prev:
        if (i !== 0 && arr[i-2] !== controls.discard_next) new_arr.push(arr[i-1]);
        break;
      default: new_arr.push(arr[i]);
    }
  }

  return new_arr;
};
