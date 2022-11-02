const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

//36ce2fc4af8a1bf49e7d67df4cccbef7-us8
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

app.post("/", function (req, res) {

    var enteredFirstName = req.body.firstName;
    var enteredLastName = req.body.lastName;
    var enteredEmail = req.body.userEmail;

    res.send(
        "Your Post is Recieved Thank YOU!"
    )
})



