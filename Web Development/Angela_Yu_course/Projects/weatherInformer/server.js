const express = require("express");
const bodyParser = require("body-parser");

const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, function (req, res) {
    console.log(`Local Server is running on port ${port}`);
});



app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});


app.post("/", function (req, res) {

    cityName = req.body.cityName;


    const query = cityName;
    const apiKey = "c79da2f15d21394cad46b93736fb5900";
    const units = "metric";
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather
?q=${query}
&appid=${apiKey}
&units=${units}`;

    //must have https://
    https.get(openWeatherURL, function (openWeatherResponse) {
        //we are getting a bunch of data from the url, & we execute a function in response to that

        console.log("Status Code:" + openWeatherResponse.statusCode);
        //This function is response to data of openWeather
        openWeatherResponse.on("data", function (data) {
            //data is in hexadecimal format so we convert to JSON format

            const weatherData = JSON.parse(data);
            // console.log(weatherData);

            //   const weatherData2 = JSON.stringify(data);
            //   console.log(weatherData2);

            const currentTemperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const weatherImageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            // console.log("The current Temperature is: " + currentTemperature);
            // console.log("The current Weather is: " + weatherDescription);
            res.write("<h1>For " + query + " data:</h1>");
            res.write("<h1>The current Temperature is: " + currentTemperature + "</h1>");
            res.write("<h1>The current Weather is: " + weatherDescription + "</h1>");
            //must be in image html format to work
            // res.write(weatherImageURL); not working
            res.write("<img src=" + weatherImageURL + " >");
            res.send();

        })
    });




});





