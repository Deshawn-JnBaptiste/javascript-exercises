const findTheOldest = function(arr) {

    function getAge(person) {
            if (!Object.hasOwn(person, "yearOfDeath")) {
                const currentDate = new Date().getFullYear();
                return currentDate - person.yearOfBirth
        }  
           return person.yearOfDeath - person.yearOfBirth;
        
        }
    }

// Do not edit below this line
module.exports = findTheOldest;
