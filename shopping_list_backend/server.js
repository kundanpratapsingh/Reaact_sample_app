const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

const items = require("./routes/api/items");

//BodyParser middleware

app.use(bodyParser.json());

app.use(cors());

app.use("/api/items", items);
//connect to Port

const db = require("./config/keys");
console.log(db, "-------------");
mongoose
  .connect(db.url)
  .then(() => {
    console.log("MONGOO CONNected........");
  })
  .catch(err => {
    console.log(err);
  });

//Set PORT

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
