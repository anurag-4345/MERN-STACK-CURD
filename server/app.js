const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res, next) => {
    res.send({ name: "anurag" })
})

app.post("/postData", (req, res, next) => {
    console.log(res.body);
    res.send(req.body)
})
app.listen(3001, () => {
    console.log("read to go server")
})