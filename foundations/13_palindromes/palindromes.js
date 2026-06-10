const palindromes = function (string) {
    // String containing all the valid characters.
    const acceptedCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';

    // Sets string to lowercase, then into an array of each character, then filters the array to only accept it if the character is in acceptedCharacters, and then puts it back into a string.
    const cleanString = string
        .toLowerCase()
        .split('')
        .filter((character) => acceptedCharacters.includes(character))
        .join('');
    
    reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
