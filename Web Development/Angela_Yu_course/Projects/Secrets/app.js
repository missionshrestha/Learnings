//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { urlencoded } = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser, urlencoded({ extended: true }));

//HOME page
app.route("/")

    .get(function (req, res) {

        res.render("Home")

    });


//login page
app.route("/login")

    .get(function (req, res) {

        res.render("login")

    });


//register page
app.route("/register")

    .get(function (req, res) {

        res.render("register")

    });