const palindromes = function (string) {
    
    let letters = string.split("");
    letters.reverse();

    let newString = letters.join("");
    
    return newString === string;
};

// Do not edit below this line
module.exports = palindromes;
