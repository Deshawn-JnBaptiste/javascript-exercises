const fibonacci = function(index) {
   let previous = 1;
   let current = 1;
   let next;

   if (index == 1 || index == 2) {
    return 1;
   }

   for(let i = 0; i < index; i++) {
    next = previous + current;
    previous = current;
    current = next;
   }
   return next;
};

// Do not edit below this line
module.exports = fibonacci;
