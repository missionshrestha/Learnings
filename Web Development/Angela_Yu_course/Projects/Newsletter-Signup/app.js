const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { resolve } = require("path");

// API KEY 
//36ce2fc4af8a1bf49e7d67df4cccbef7-us8
// LIST ID
// e92cf06549
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const localPort = 3000;

//helps to load everything inside assets folder  
app.use('/assets', express.static('assets'));

//listens to both local port & heroku
app.listen(localPort || process.env.PORT, function () {
    console.log(`Server is running on port: ${localPort}`);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html")
    // res.sendFile(__dirname + "/styles.css")
});


//form which is posted from action="/',comes here
app.post("/", function (req, res) {

    const enteredLastName = req.body.lastName;
    const enteredFirstName = req.body.firstName;
    const enteredEmail = req.body.userEmail;

    //this is format for posting in mailchimp
    const data = {
        members: [
            {
                //send userEmail received from our home page form to mailchimp server
                email_address: enteredEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: enteredFirstName,
                    LNAME: enteredLastName,
                }


            }
        ]
    };
    const jsonFormatedData = JSON.stringify(data);

    // https://us8.api.mailchimp.com/3.0/
    const url = "https:/us8.api.mailchimp.com/3.0/lists/e92cf06549"
    const options = {
        method: "POST",
        auth: "mission:36ce2fc4af8a1bf49e7d67df4cccbef7-us8"
    }

    //new constant request hold data obtained from given url
    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
        }
        else {
            res.sendFile(__dirname + "/failure.html")

        }
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    }
    )

    //members(email_address, status,etc are sent & writeen to mailchimp );
    request.write(jsonFormatedData);
    request.end();


    /* res.send(
        "Your Post is Recieved Thank YOU!"
    ) */
})


//form which is posted from action="/failure',comes here
app.post("/failure", function (req, res) {
    res.redirect("/");
});






