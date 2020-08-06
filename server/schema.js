const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anurag:anurag@project-eb8b0.mongodb.net/Record?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

const modelData =  mongoose.Schema({
    name: String,
    email: String,
    date: Date
})

let random = mongoose.model("random", modelData);

module.exports.details = random