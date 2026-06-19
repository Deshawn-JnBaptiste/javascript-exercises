const convertToCelsius = function(num) {
  // fahrenheit to celsius
  let cel = (num - 32) / 1.8;
  return Math.round(cel * 10) / 10;

};

const convertToFahrenheit = function(num) { 
  // celsius to fahrenheit
  let fah = (num * 1.8) + 32;
  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
