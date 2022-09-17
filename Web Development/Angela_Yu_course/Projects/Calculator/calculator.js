const express = require("express");

const app = express();

const port = 1010;

app.listen(port, function () {
    console.log(` Example app listening on port ${port} `);
})

app.get("/", function (req, res) {
    res.send(
        "This is the Home page!"
    )
});
app.get("/calculator", function (req, res) {
    res.send(
        "<h1>Welcome to my calculator!</h1>"
    )
});

