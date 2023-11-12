// addition
// functions that adds two number
const add = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber
    return result;
}

// subtraction
const sub = (firstNumber, secondNumber) => {
    const result = firstNumber - secondNumber;
    return result
};

// division 
const div = (firstNumber, secondNumber) => {
    const result = firstNumber / secondNumber;
    return result
}


// multiplicatin
const mul = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber
    return result
}


module.exports= {
    add,
    sub,
    div,
    mul
}