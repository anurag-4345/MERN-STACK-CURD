const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const {details} = require("./schema")
const allReacord = details.find({})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res, next) => {
    allReacord.exec((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

app.post("/postData", (req, res, next) => {
    let serverData =new details({
        name:req.body.name,
        email:req.body.email,
        date:Date.now()
    })
    serverData.save((err,data)=>{
        if(err) throw err;
        res.redirect(data)
    })
})

app.listen(3001, () => {
    console.log("read to go server")
})