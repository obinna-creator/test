//this is transform stream
const { Transform, Stream } = require("stream")

class ReplaceText extends Transform{
    constructor( char) {
        super()
        this.replaceChar =char
    }
    _transform(chunk, encoding, callback) {
        const transformChunk= chunk.toString().replace(/[a-z]|[A-Z][0-9]/g,this.replaceChar)
        this.push(transformChunk) 
        callback
                                                                                                                                                                      
    }
    _flush(callback) {
        this.push("this is loading more is processing")              
        callback
    }
}
 const zStream= new ReplaceText ('z')
process.stdin.pipe(zStream).pipe(process.stdout)
cons

                                                     