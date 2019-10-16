/**
 * Originally sourced from StackOverflow
 * https://stackoverflow.com/questions/9453421/how-to-round-float-numbers-in-javascript/19794305#19794305
 * Credit to https://stackoverflow.com/users/1646706/a-s-panchenko for the original answer
 * This has not been performance tested.
 */

////////////////
///////////////

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // If the value is negative...
  if (value < 0) {
    return -decimalAdjust(type, -value, exp);
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Example:
// round10(1.005, -2) = 1.01

const round10 = (value, exp) => decimalAdjust('round', value, exp)
const floor10 = (value, exp) => decimalAdjust('floor', value, exp)
const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp)

module.exports = { round10, floor10, ceil10 }