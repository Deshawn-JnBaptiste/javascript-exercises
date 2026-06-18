const removeFromArray = function(arr, ...etc) {

    for (const arg of etc) {
        let index = arr.findIndex((item) => item == arg);
        arr.splice(index, 1)
    }
    
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
