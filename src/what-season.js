const CustomError = require("../extensions/custom-error");

module.exports = date => {
  if (!date) return 'Unable to determine the time of year!';

  let month;

  try {
    month = date.getUTCMonth();
  } catch(err) {
    throw new Error(err);
  }

  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  return seasons[month];
};
