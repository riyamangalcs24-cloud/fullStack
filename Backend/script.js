const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
app.use(bodyParser.json()); // middleware

app.get("/",(req,res) => {
    res.send("HELLO JI");
})

app.get("/data",(req,res) => {
    res.send("<h1>Hello Riya</h1>");
})

app.post("/user",(req,res) => {
    const { name,section } = req.body;
    console.log(name);
    console.log(section);
    res.send("Data Recived");
})


mongoose.connect("mongodb://localhost:27017/mydata").then(() => {
    console.log("DB Connected sucessfully");
}).catch((error) => {
    console.log(error);
    console,log("DB NOT CONNEcted");
})
app.listen(3000,() => {
    try{
        console.log(`http://localhost:${PORT}`);
    } catch(error){
        console.log(error);
    }
})