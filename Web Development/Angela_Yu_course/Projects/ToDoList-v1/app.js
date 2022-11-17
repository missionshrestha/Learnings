//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");



const app = express();

//we need to use date() ro run function
const addedItemArray = ["First Task"];//will be used in both app.get & app.post
const workItemArray = ["Work 1"];
//here const is used, so pushing new value is only allowed but assigning new item is not allowed
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {

    let currentDate = date.getDate();
    // let currentDate = date.getDay();

    //this list file must be inside views for render to work
    res.render(
        'list',
        {
            listTitle: currentDate + " Home ",
            newItemListArray: addedItemArray
        });
    //we pass currentDate,addedItem to kindOfDay, newListItem present in list.ejs
});

app.post("/", function (req, res) {
    console.log(req.body)
    addedItem = req.body.newItem;//must use app.use(bodyParser.urlencoded({ extended: true }));
    console.log(addedItem);
    if (req.body.list == "Work List") {
        workItemArray.push(addedItem);
        res.redirect("/work")
    }
    else {
        addedItemArray.push(addedItem);
        res.redirect("/");
        //when post request is triggered, we redirect to trigger app.get()

        /* res.render("list", { newListItem: addedItem }); */
        //we cannot render this bcoz each time we render / home route, 
        // new app.get() is triggered & there we only pass kindOfDay:date but not newListItem

    }



});

app.get("/work", function (req, res) {
    res.render(
        'list',
        {
            listTitle: "Work List",
            newItemListArray: workItemArray
        }
    )
});

/* app.post('/work', function (req, res) {
    let addedWorkItem = req.body.newItem;
    workItemArray.push(addedWorkItem);
    res.redirect("/work");
}); */

app.get('/about', function (req, res) {
    res.render(
        'about'
    )
});


app.listen(3000, function () {
    console.log("Server started at port 3000.")
});