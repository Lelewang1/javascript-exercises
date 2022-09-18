const sumAll = function(firstNum, secNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secNum) || firstNum < 0 || secNum < 0){
        return 'ERROR';
    }
    let large = 0;
    let small = 0;
    let sum = 0;
    if (firstNum > secNum) {
        large = firstNum;
        small = secNum;
    } 
    else {
        large = secNum;
        small = firstNum
    }
    for (let i = small; i <= large; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
