 const express=require("express")
const port = 2000
const app = express()
 
app.get("/", async (reg, res) => {
     res.send()
})
app.listen(port, () => {
     console.log(`app is listening on server ${port}`);
 })