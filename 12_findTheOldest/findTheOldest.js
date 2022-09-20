const findTheOldest = function(array) {
    let oldest = 0;
    let age = 0;
    let output;
    array.forEach(person => {
        if (!person.hasOwnProperty('yearOfDeath')) {
            age = 2022 - person.yearOfBirth;
            if (age > oldest) {
                oldest = age;
                output = person;
            } 
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldest) {
                oldest = age;
                output = person;
            } 
        }
        
    });
    return output;
};

// Do not edit below this line
module.exports = findTheOldest;
