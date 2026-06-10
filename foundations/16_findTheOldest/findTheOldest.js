const findTheOldest = function(array) {
    const oldest = array.sort((firstPerson, secondPerson) => {
        if (!("yearOfDeath" in firstPerson)) firstPerson.yearOfDeath = (new Date()).getFullYear();
        if (!("yearOfDeath" in secondPerson)) secondPerson.yearOfDeath = (new Date()).getFullYear();

        let firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        let secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        return firstPersonAge > secondPersonAge ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
