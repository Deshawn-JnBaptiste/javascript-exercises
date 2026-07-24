const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	arr.reduce((total, num) => total + num);
};

const multiply = function(arr) {
  arr.reduce((total, num) => total * num);
};

const power = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
    return result;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
