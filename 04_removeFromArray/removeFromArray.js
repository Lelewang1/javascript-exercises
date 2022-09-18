const removeFromArray = function(array, ...values) {
    const output = [];
    console.log(values);
    for (let i = 0; i < array.length; i++) {
        if (values.includes(array[i])) {
            continue;
        }
        else {
            output.push(array[i]);
        }
        // output.push(array[i]);
        // console.log(output);
    }
    return output;
};

const a = [0, 1, 2];
console.log(removeFromArray(a, 0, 3, 4));
console.log(a);

// Do not edit below this line
module.exports = removeFromArray;
