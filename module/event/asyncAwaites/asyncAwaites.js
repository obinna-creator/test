//working with async/Await
//import the file systm

const { error } = require('console');
const { readFile, writeFile } = require('fs/promises');

//const fs = require("fs").promises

//  async function readFromFile() {
//     try {
//         await fs.readFile("./testFiles.txt", "utf-8", (error, data) => {
//             if (error) {
//                 console.log("this file does not exist");
//             } else {
//                 console.log(data);
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
//  readFromFile()
//using arror function

// const trial  = async()  => {
//     try {
//         await fs.readFile ("./testFile.txt", "utf-8", (error, data) => {
//             if (error) {
//                 console.log("this file does not exist");
//             } else {
//                 console.log(data);
//             }
//         } )
//     } catch (error) {
//         console.log(error);
//     }
// }
// trial()

// const fs = require("fs").promises;
// const writeFile = async () => {
//     try {
//         const showText="this is my write example"
//         await fs.writeFile("./write.txt", showText)
//         console.log("this is succssful");
//     } catch (error) {
//         console.log("checking error", error.message);
//     }
// }

// writeFile()

// const fs = require('fs').promises;

// const trial = async () => {
//     try {
//         const data = await fs.readFile("./testFiles.txt", "utf-8");
//         console.log(data);
//     } catch (error) {
//         if (error.code !== readFile) {
//             console.log("This file does not exist.");
//         } else {
//             console.log(error);
//         }
//     }
// };

// trial();

// const fs =require("fs");
// const { error } = require('console');

// const myTry = async () => {
    
//     try {
//         await fs.writeFile("./write.txt", "hello world", "utf-8", (error) => {

//              if (error) {
//                 console.log("message",error);
//              } else {
//                 console.log("good one");
//              }
//          });
//     } catch (error) {
        
//     }
// }
// myTry()

const fs = require("fs")
const myTry = async () => {
    try {
          
    await fs.writeFile("./write.txt", "i am very tired  of coding", "utf-8", (error) => {
        if (error) {
            console.log("message",error);
        } else {
        console.log("good one");                                                                    
        }
    })
        
    } catch (error) {
        
    }
  
}
myTry()