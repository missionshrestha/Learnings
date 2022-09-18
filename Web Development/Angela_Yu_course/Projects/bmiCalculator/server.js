const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));


//this is when app start to listen, an msg is shown in console
app.listen(port, function () {
    console.log("Starting server 5000")
})


//loads bmiCalculator.html file when the location 5000/bmicalculator is accesed in webbrowser
app.get("/bmiCalculator", function name(req, res) {
    // res.send("<h1>BMI Calculator</h1> <hr>")
    res.sendFile(__dirname + "/bmiCalculator.html")

})

//when something is posted to bmiCalculator, following function occurs
app.post("/bmiCalculator", function (req, res) {
    //this heightAsked is in bmiCalculator.html
    // We are requesting data of heightAsked from body present in /bmiCalculator
    var height = parseFloat(req.body.heightAsked);
    var weight = parseFloat(req.body.weightAsked);
    var BMI = weight / (height * height);
    res.send(`Your BMI is: ${BMI}`);

});

