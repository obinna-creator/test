// let http=require("http")
const fs = require("fs");

//  writeable streams
const myReadStreams = fs.createReadStream("./test.txt", "utf8");
const myWriteStreams = fs.createWriteStream("./write.txt");

myReadStreams .on("data", (chunk) => {
    console.log(`our chunk : ${chunk}`);
    console.log("new chunk received");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    myWriteStreams.write(chunk)
})

// end of read streams

myReadStreams.on("end", () => {
    console.log("end of our chunks");
})                   
                                                  