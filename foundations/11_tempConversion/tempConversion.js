const convertToCelsius = function(num) {
  // fahrenheit to celsius
  return (num - 32) / 1.8;

};

const convertToFahrenheit = function(num) { 
  // celsius to fahrenheit
  return (num * 1.8) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
