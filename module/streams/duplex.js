// a duplex streams is a combination of both read streams write streams
// for you to creat a duplex stream you will need to creat the passthrough
// passThrough is a duplex stream that act as a tunnel to pipe a readableStream to writeableStream

const { PassThrough } = require('stream')  
const access = new PassThrough()      
         
// creating a destructuring type withe the readStream and WriteableStream
    
const {createReadStream, createWriteStream } = require('fs')
const readSream = createReadStream("./input.txt")
const writeStream = createWriteStream("./output.txt")
access.on("data", (chunk) => {

    
    console.log("Bytes :", chunk );                                                                                                        
}) 
 
readSream.pipe(access).pipe(writeStream)
