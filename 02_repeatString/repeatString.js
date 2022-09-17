const repeatString = function(string, number) {
    let output = string;
    if (number == 1) {
        return output;
    }
    else if (number == 0 || string == '') {
        return '';
    }
    else if (number < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 1; i < number; i++) {
            output = output + string;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
