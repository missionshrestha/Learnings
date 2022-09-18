const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 1010;


app.listen(port, function () {
    console.log(` Example app listening on port ${port} `);
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/calculator", function (req, res) {
    res.send(
        "<h1>Welcome to my calculator!</h1>"
    );
});


//this helps to response(to / location) to post from html form
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`The sum of 2 is: ${result}`);


})



