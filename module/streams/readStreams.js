// readSream
// import the file system module (fs)

const fs = require ("fs");

// read a file                       
const myReadStreams = fs.createReadStream("./test.txt", "utf8");
  
myReadStreams.on("data", (chunk) => {
    console.log(`our chunk : ${chunk}`);
})

// end of read streams

myReadStreams.on("end", () => {
    console.log("end of our chunks");
})
   
  
    