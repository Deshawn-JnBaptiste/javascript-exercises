const leapYears = function(year) {
//Check if year is divisble by 4 then check if it is divisble by 100
if (year % 4 == 0) {
    if (year % 100 == 0) {
        return false;
    } else {
        return true;
    }
}

};

// Do not edit below this line
module.exports = leapYears;
