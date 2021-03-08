const CustomError = require("../extensions/custom-error");

function turnsCount (num) {
  if (num === 1) return 1;
  return turnsCount(num - 1) * 2 + 1; // formula
}

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = turnsCount(disksNumber),
      turn_time = 1 / (turnsSpeed / 60 / 60); // time a turn
      seconds = Math.floor(turn_time * turns);

  return { turns, seconds };
};
