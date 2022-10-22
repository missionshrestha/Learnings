const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

//helps to load everything inside assets folder  
app.use('/assets', express.static('assets'));


app.listen(port, function () {
    console.log(`Server is running on port: ${port}`);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html")
    // res.sendFile(__dirname + "/styles.css")
});

