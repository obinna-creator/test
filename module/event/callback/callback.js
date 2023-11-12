//using callback to imp

const { write, writeFile } = require("fs");

// import the fs module


// const { error, log } = require("console");
// const fs = require("fs")


// get the document

//let myDocument="./callbackTest.txt"


//implement the read opreation with a callback

// fs.readFile(myDocument, "utf-8", (  error, data) => {
//     if (error) {
//         console.log("message"+error);
//         console.log("message unable to read file"+myDocument);
        
//     } else {
//         console.log(data); 
//     }
// })


const fs = require("fs").promises;

let docWrite = "./write.txt"

//let docText = "./callbackTest.txt"

// fs.readFile(docText, "utf-8", (error, data) =>{
//     if (error) {
//         console.log("message",error);
//     } else {
//         console.log(data);
//     }
// })
fs.writeFile(docWrite, "obinna", "utf8", (error, data) => {
    
    
    if (error) {
        console.log("message",error);
    } else {
      console.log(data);
    }
    console.log("new file added");
})

swi
