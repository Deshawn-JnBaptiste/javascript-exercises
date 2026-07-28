const findTheOldest = function(arr) {
    const newPeople = arr.map((person) => {

        const newPerson = {
            name: person.name,
            yearOfBirth: person.yearOfBirth,
            yearOfDeath: person.yearOfDeath,
        }
        
        if (!Object.hasOwn(person, "yearOfDeath")) {
            const currentDate = new Date().getFullYear();
            newPerson.age = currentDate - person.yearOfBirth
        } else {
            newPerson.age = person.yearOfDeath - person.yearOfBirth;
        }

        return newPerson
    })
};

// Do not edit below this line
module.exports = findTheOldest;
