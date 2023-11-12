// using promise

//import module



// const fs = require("fs")
// //get the document
// const myDoc="./promisetest.txt"

// // implent with a promise

// fs.readFile(myDoc, "utf-8")
//     .then((data) => {
//     console.log(data);
//     }).catch((e) => {
//     console.log("message",e);
//     })

const fs = require("fs").promises
//get the document
const myDoc2="./promisesText.txt"

// implent with a promise

fs.writeFile(myDoc2, "grace","utf-8")
    .then(() => {
    console.log("your work is done");
    }).catch((e) => {
    console.log("message",e);
})