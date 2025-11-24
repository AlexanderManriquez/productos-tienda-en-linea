function isValidString(value, min = 1, max = 500) {
  return typeof value === 'string' && value.trim().length > min && value.trim().length <= max;
}

function isValidNumber(value) {
  return !isNaN(value) && Number(value) >= 0;
}

function isValidInteger(value) {
  return Number.isInteger(Number(value))  && Number(value) >= 0;
}

module.exports = {
  isValidString,
  isValidNumber,
  isValidInteger
};