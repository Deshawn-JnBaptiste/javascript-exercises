const palindromes = function (string) {
    
    let normalizedString = string.toLowerCase().replaceAll(/[^a-z]/g, "")

    let reversedString = normalizedString.split("").reverse().join("");

    return reversedString === normalizedString;
};

// Do not edit below this line
module.exports = palindromes;
