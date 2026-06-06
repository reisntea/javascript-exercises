const repeatString = function(str, num) {
    if (num < 0) return "ERROR";

    let repeatedStr = "";
    for (num; num > 0; num--) {
        repeatedStr = repeatedStr + str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
