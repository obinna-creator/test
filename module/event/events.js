1// import the module

// const eventEmitter = require("events");

// //extends a class to the eventEmitter

// class myEmitter extends eventEmitter{}

// const emittedObject = new myEmitter()

// emittedObject.on("lightUp",() => {
//     console.log("up nepa");
// })
// emittedObject.emit("lightUp"
// )


// const eventEmitter = require("events")

// class myEmitter extends eventEmitter{ }
// const emittedObject = new myEmitter()
// emittedObject.on("light up", () => {
//     console.log("up nepa");
// })
// emittedObject.emit("lightup")
  
const eventEmitter= require("events")
class myEmitter extends eventEmitter{}
const emittedObject = new myEmitter()
emittedObject.on("light up", () => {
    console.log("up nepa");
})
emittedObject.emit("light up")