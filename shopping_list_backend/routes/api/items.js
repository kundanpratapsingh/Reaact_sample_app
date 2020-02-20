const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

//List all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    });
});

//Insert item into collection
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => {
    res.json(item);
  });
});

//delete item with ID
router.delete("/:id", (req, res) => {
  console.log(req.params);
  Item.findById(req.params.id)
    .then(item => {
      item.remove().then(() => {
        res.json({ success: "Item removed sucessfully" });
      });
    })
    .catch(err => {
      res.status(404).json({ notfound: "Cannot Delete the item." });
    });
});

//fetch item by ID
router.get("/:id", (req, res) => {
  Item.findById(req.params.id).then(item => {
    const nullResponse = { item: item };
    if (nullResponse.item != null) {
      res.json({ item: item });
    } else {
      res.status(404).json({ notfound: "Cannot find the item" });
    }
  });

  // .catch(err => {
  //   res.status(404).json({ notfound: "Cannot find the item" });
  // });
});

module.exports = router;
