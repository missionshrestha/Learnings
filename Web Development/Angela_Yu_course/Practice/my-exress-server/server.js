const express = require("express");

const app = express();
const port = 3000;
//what happens when browser enters our server address
app.get("/", function (request, response) {
    // console.log(request);
    response.send("Hello");
});

app.get("/contact", function (req, res) {
    res.send("This is contact page");
});

app.get("/about", function (req, res) {
    res.send("Hi my name is mission shrestha");
});

app.get("/hobbies", function (req, res) {
    res.send("These are my hobbies");

});


app.listen(port, function () {
    console.log("Server has started at port 3000");
});