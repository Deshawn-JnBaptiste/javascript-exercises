const findTheOldest = function(arr) {

    function getAge(person) {
            if (!Object.hasOwn(person, "yearOfDeath")) {
                const currentDate = new Date().getFullYear();
                return currentDate - person.yearOfBirth
        }  
           return person.yearOfDeath - person.yearOfBirth;
        
        }

    const oldestPerson = arr.reduce((oldest, person)=> {
        if (getAge(person) > getAge(oldest)) {
            oldest = person;
        }
        return oldest;
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
