// const traffic = () => {
//     const green = setInterval(() => {
//         console.log("go green color");
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(green)
//         console.log("stop moving");
//     }, 11000);

const { default: chalk } = require("chalk");


//     setTimeout(() => {
//         const yellow = setInterval(() => {
//             console.log("ready : yellow color");
//         }, 1000);
//         setTimeout(() => {
//             clearInterval(yellow)
//             console.log("yellow has stopped");
            
//         }, 5000);
//     }, 12000);
    
//     setTimeout(() => {
//         const red = setInterval(() => {
//             console.log("stop:red color");
//         }, 1000);
//         setTimeout(() => {
//             clearInterval(red)
//             console.log("i am done running");
//         }, 10000);
//     }, 18000);



// }

// traffic()
// setInterval(() => {
//     traffic()
// }, 27000);




















// const traffic = () => {
//   const red = setInterval(() => {
//     console.log(chalk.red("red"));
//   })
//   setTimeout(() => {
//     clearInterval(red)
//   })

//   setTimeout(() => {
//     const yellow = setInterval(() => {
//       console.log(chalk.yellow("yellow"));
//     })
//     setTimeout(() => {
//       clearInterval(yellow)
//     })
//   }, 3000)
//    setTimeout(() => {
//     const green = setInterval(() => {
//       console.log(chalk.green("green"));
//     })
//     setTimeout(() => {
//       clearInterval(green)
      
//     })
//   },6000)
// }
// traffic()

const prompt = require("prompt-sync")()

const userEntry = () => {
  let name="collins"
  let age = 20
  let user = prompt("enter your user name")
  if (name&&age==user) {
    console.log("you got it right");
  } else {
    console.log("incorrect");
  }
}