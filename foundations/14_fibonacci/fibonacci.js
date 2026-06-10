const fibonacci = function(num) {
    // Since the sequence starts as 0, 1, 1, 2, 3, 5, etc.
    let precedingNum = 0;
    let currentNum = 1;

    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    }

    // Each iteration sets currentNum to be the sum of the previous two values, and then sets the previous two values up a step in the sequence.
    for (let i = 2; i <= num; i++) {
        let nextNum = currentNum + precedingNum;
        precedingNum = currentNum;
        currentNum = nextNum;
    }
    return currentNum;

};

// Do not edit below this line
module.exports = fibonacci;
