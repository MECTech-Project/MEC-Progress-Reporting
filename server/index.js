const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://electro-99:electro.99@cluster0.txzcl.mongodb.net/mec-reports?retryWrites=true&w=majority"
    );

app.listen(5000, () => {
    console.log("Server is running on port (5000)");
});