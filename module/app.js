// main application
// import module
// method 1 (dot notation)
const myAddition = require('./math')
const mySub = require('./math')
const myDiv = require('./math')
const myMul = require('./math')

// add two numbers

let firstNumber= 5
let secondNumber=20
let result = myAddition.add(firstNumber, secondNumber)
console.log(result);

//sub  two number

let a = 5
let b = 10
let solution =mySub.sub(a,b)
console.log(solution);

// divsion

let c = 20
let d = 5
let divUp = myDiv.div(c, d)
console.log(divUp);

// multiplication

let e = 10
let f = 10
let mulTi = myMul.mul(e, f)
console.log(mulTi);



// method two destructuring
const {add,sub, div,mul} = require('./math')
// addition wth destruction method
let firstNumber2= 10
let secondNumber2=20
let result2 = add(firstNumber2, secondNumber2)
console.log(result2);



// subtraction with destruction

let a1 = 50
let b1 = 10
let solution1= sub(a1,b1)
console.log(solution1);

// divsion with destruction


let c1= 100
let d1 = 50
let divUp2 = div(c1, d1)
console.log(divUp2);


// multiplication with destructuring


let e2 = 10
let f2 = 50
let mulTi2 = mul(e2, f2 )
console.log(mulTi2);


