const removeFromArray = function(arr, ...etc) {

    for (const arg of etc) {
        return arr.filter(item => !etc.includes(item));
    }

   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
