const CustomError = require("../extensions/custom-error");

module.exports = (str, options) => {
  let new_str = '';

  options.separator = options.separator || '+';
  options.additionSeparator  = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

    for ( let i = 0; i < options.repeatTimes; i++ ) {
      if ( i !== 0 ) new_str += options.separator;
      new_str += str;

      if (options.addition !== undefined) {
        for ( let j = 0; j < options.additionRepeatTimes; j++ ) {
          if ( j !== 0 ) new_str += options.additionSeparator;
          new_str += options.addition;
        }
      }
    }

  return new_str;
};
  