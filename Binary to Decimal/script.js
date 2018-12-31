const binaryArrayToNumber = arr => {
    let digit = parseInt(Number(arr.join("")), 2);
    return digit;
};