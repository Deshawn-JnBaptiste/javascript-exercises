const removeFromArray = function(arr, a) {
   let index = arr.findIndex((item) => item == a);
   arr.splice(index, 1)
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
