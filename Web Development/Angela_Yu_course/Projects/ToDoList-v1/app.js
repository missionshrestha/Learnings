//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    var today = new Date();
    const currentDay = today.getDay();
    var day = '';
    console.log(currentDay);

    switch (currentDay) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;

        default:
            day = 'This is not actual day'
            console.log("Error! Current Day is: " + currentDay)
            break;
    }


    //this list file must be inside views for render to work
    res.render('list', { kindOfDay: day })
});

app.listen(3000, function () {
    console.log("Server started at port 3000.")
});