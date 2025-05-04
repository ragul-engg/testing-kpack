const express = require("express")
const app = express()
const PORT = 8080

app.get("/", (req, res) => {
	res.send("Hello World")
})

app.get("/health", (req, res)=>{
    res.send(200)
})

app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`)
})
