const reverseString = function(str) {
 let array = str.split("");
 array.reverse();
 return array.toString().replaceAll(",", "")
};

// Do not edit below this line
module.exports = reverseString;
