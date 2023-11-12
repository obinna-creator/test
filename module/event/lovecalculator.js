

// // function BackendStudent(female, male) {
// //     console.log(`the girlfriend of ${male} is ${female}`);
    
// // }
// // BackendStudent("favour", "isaac")

// const doSomethingElse = (a) => {
//
//     const woman = Math.floor(Math.random() * 100)
//     const average = (man + woman) / 2
//     const result = { man: a, woman:woman , average: average }
//     return result


// }




// const doThirdThing = (a) => {
       

        
// switch (true) {
        
    
//             case (a.average >= 70):
//                 return (`man is:${a.man}, woman is: ${a.woman},average is: ${a.average} you are compactible`)
//             case (a.average >= 60):
//                 return (`man is:${a.man}, woman is: ${a.woman},average is: ${a.average} you are slightly compactible`)
//             case (a.average >= 50):
//                 return (`man is:${a.man}, woman is: ${a.woman},average is: ${a.average} you are manageable`)
//             case (a.average >= 40):
//                 return (`man is:${a.man}, woman is: ${a.woman},average is: ${a.average} dont marry`)


//             default:
//                 return (`${male} is:${a.man}, woman is: ${a.woman},average is: ${a.average} run for your life`)
//         }
    
//     }


// const failureCallback = ( error) => {
//     console.log(` this error happened:${error}`);
// }

// doSomething.then((result) => doSomethingElse(result)).then((newResult) => doThirdThing(newResult))
//     .then((finalResult) => {
//     console.log(`this is our last verdict: ${finalResult}`);
//     })
// .catch(failureCallback)



//created a function that generated first average number and returned the value


// const doSomethings = new Promise((resolve) => {
//     const man = firstRand = Math.floor(Math.random() * 100)
//     const woman = secondRand = Math.floor(Math.random() * 100)
//     let randAverage = (firstRand + secondRand) / 2
//     resolve(man,woman,randAverage)
//  })

// const firstAverage = (male, female, randAverage) => {
//       const man=male
//       const woman= female
//     let firstRand=Math.floor(Math.random()*100)
//     let secondRand = Math.floor(Math.random()*100)
//     let randAverage = (firstRand + secondRand) / 2
//      const result = { man: man, woman:woman, average: randAverage }
//     return result

// }

// const doSomething = (male, female, randAverage) => {
//     console.log(`${randAverage}`);
//     console.log(`${male}`);
//       console.log(`${female}`);
//     if (male,female, randAverage>=70) {
//         return (`${male} is:${male,female,randAverage.man}, ${female} is: ${male,female,randAverage.woman},${randAverage} is: ${male,female,randAverage.average} you are compactible`)
//     } else if(male,female, randAverage>=60) {
//          return (`${male} is:${male,female,randAverage.man}, ${female} is: ${male,female,randAverage.woman},${randAverage} is: ${male,female,randAverage.average} you are slightly compactible`)
//     } else if (male, female, randAverage >= 50) {
//         return (`${male} is:${male,female,randAverage.man}, ${female} is: ${male,female,randAverage.woman},${randAverage} is: ${male,female,randAverage.average} you are manageable`)
//     } else if (male, female, randAverage >= 40){
//                 return (`${male} is:${male,female,randAverage.man}, ${female} is: ${male,female,randAverage.woman},${randAverage} is: ${male,female,randAverage.average} dont marry`)

//     } else {
//          return (`${male} is:${male,female,randAverage.man}, ${female} is: ${male,female,randAverage.woman},${randAverage} is: ${male,female,randAverage.average} run for yor life `)
//     }
// }
// doSomething("obinna","mary")

// doSomethings.then((result) => firstAverage(result)).then((newResult) => doSomething(newResult))
//     .then((finalResult) => {
//     console.log(`this is our last verdict: ${finalResult}`);
//     })
// .catch(failureCallback)


// const firstAverage = () => {
//     let firstRand=Math.floor(Math.random()*100)
//     let secondRand = Math.floor(Math.random() * 100)
//     let randAverage = (firstRand + secondRand ) / 2
//     return randAverage
// }
// const secondAverage = () => {
//     let firstRand=Math.floor(Math.random()*100)
//     let secondRand = Math.floor(Math.random() * 100)
//     let randAverage = (firstRand + secondRand ) / 2
//     return randAverage

// }


// const doSomething = (male, female, firstAve, secondAve) => {
//     let result = male + "is" + secondAve + ":" + female + "is" + secondAve;
//     return(result)
// }

// let maleAve=firstAverage()
// let femaleAve = secondAverage()
// let finalResult= doSomething("obinna","mary", maleAve, femaleAve        )
// console.log(finalResult);


const calculator = (male, female) => {
    const man =Math.floor(Math.random()*100)
    const woman = Math.floor(Math.random() * 100)
    
    const average = (man + woman) / 2
   //  console.log(`${male} is ${man}% and ${female} score is ${woman}% and the average is ${average}`);


const cal = (man, woman)=> {
    if (average >= 70) {
        console.log(`${male} score is : ${man}% and ${female} score is ${woman}%  and the average is ${average}% this is ok`);

   } else if (average>=60) {
        console.log(`${male} score is : ${man}% and ${female} score is ${woman}%  and the average is ${average}% we can ok with this`);
   } else if (average >= 50) {
        console.log(`${male} score is : ${man}% and ${female} score is ${woman}%  and the average is ${average}% same with this`);
   } else if (average >= 40) {
        console.log(`${male} score is : ${man}% and ${female} score is ${woman}%  and the average is ${average}% red flag`);
   } else {
        console.log(`${male} score is : ${man}% and ${female} score is ${woman}%  and the average is ${average}% run for your life`);
   }

}
cal()
}
calculator("obinna","mary")