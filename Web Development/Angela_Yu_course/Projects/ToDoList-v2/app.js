//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemSchema = {
  name: {
    type: String,
    required: [true, "Must enter the item name"]
  }
}

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Buy Food"
});
const item2 = new Item({
  name: "Cook Food"
});
const item3 = new Item({
  name: "Eat Food"
});

const defaultItems = [item1, item2, item3];

//creating a listSchema having list title & array of items
const listSchema = {
  name: String,
  items: [itemSchema]
}

const List = mongoose.model("List", listSchema);



app.get("/", function (req, res) {

  Item.find({},
    function (err, foundItems) {
      if (err) {
        console.log(err);
        console.log("Error found in find Item");
      }
      else {
        if (foundItems.length === 0) {
          Item.insertMany(defaultItems, function (err) {
            if (err) {
              console.log(err);
              console.log("Error found in insertMany");
            }
            else {
              console.log("Successfully inserted defaultItems")
            }
          })

          res.redirect("/")
        }
        else {
          console.log(foundItems)
          console.log("Successfully found Items")
          res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
      }
    })

});

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);


  List.findOne({ name: customListName }, function (err, foundlist) {
    if (!err) {
      if (!foundlist) {
        //Create new list
        const list = new List({
          name: customListName,
          items: defaultItems
        })
        list.save();
        res.redirect(`/${customListName}`);
      }
      else {
        // show existing list
        res.render("list", { listTitle: foundlist.name, newListItems: foundlist.items });

      }
    }
  })


});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;


  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/")
  }
  else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save()
      res.redirect(`/${listName}`)
    })

  }


});

app.post("/delete", function (req, res) {
  const toBeDeletedItem = req.body.checkedItem.trim()
  //trim should be used to remove unwanted spaces in string
  const listName = req.body.listName.trim();
  console.log(listName);
  if (listName === "Today") {
    Item.findByIdAndRemove(toBeDeletedItem, function (err) {
      if (err) {
        console.log(err);
        console.log("Error found in delete");
      }
      else {

        console.log("Successfully deleted item")
        res.redirect("/")

      }
    })
  }

  else {

    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: toBeDeletedItem } } }, function (err, foundList) {
      if (!err) {
        res.redirect(`/${listName}`)
      }
    });

  }



})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
