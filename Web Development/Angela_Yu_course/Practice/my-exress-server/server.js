const express = require("express");

const app = express();
const port = 3000;
//what happens when browser enters our server address
app.get("/", function (request, response) {
    // console.log(request);
    response.send("Hello");
});


app.listen(port, function () {
    console.log("Server has started at port 3000");
});