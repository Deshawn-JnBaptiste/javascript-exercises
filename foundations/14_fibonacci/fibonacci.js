const fibonacci = function(n) {
   let previous = 1;
   let current = 1;
   let next;
   const index = Number(n);

   if (index < 0) {
    return "OOPS"
   }

   switch (index) {
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 1;
   }
   
   for(let i = 2; i < index; i++) {
    next = previous + current;
    previous = current;
    current = next;
   }
   return next;
};

// Do not edit below this line
module.exports = fibonacci;
