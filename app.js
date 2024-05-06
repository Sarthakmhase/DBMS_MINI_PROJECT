const express = require('express');
const app = express();
const port = 9000;
const path = require('path');
const bodyparser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Apple");
}

// setting structure of database
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  help: String,
  location: String,
});

// locking the structure or schema
const Contact = mongoose.model("Contact", ContactSchema);

// EXPRESS SPECIFIC STUFF //
app.use('/static', express.static('static')); // for serving static file in app.js
app.use(express.urlencoded()); // to transfer all data of our website to express

// PUG SPECIFIC STUFF //
app.set('view engine', 'html'); // set the template engine
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS //
app.get("/", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/music", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/music.html');
});

app.get("/tv", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/tv.html');
});

app.get("/fitness", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/fitness.html');
});

app.get("/arcade", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/arcade.html');
});

app.get("/icloud", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/icloud.html');
});

app.get("/contact", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/contact.html');
});

app.get("/pay", (req, res) => {
  const param = {};
  res.sendFile(__dirname + '/views/pay.html');
});

app.post("/contact", async (req, res) => {
  // get data from body and send it to schema
  var mydata = new Contact(req.body);
  mydata.save().then(() => {
    res.send("Thanks! Our experts will contact you soon......... ")
  })
    .catch(() => {
      res.status(404).send("Not found");
    })
});

// Add a new endpoint to retrieve contacts grouped by location
app.get("/contacts-by-location", async (req, res) => {
  try {
    // Use Mongoose aggregation pipeline to group contacts by location
    const contactsByLocation = await Contact.aggregate([
      { $group: { _id: "$location", count: { $sum: 1 } } }
    ]);
    res.json(contactsByLocation);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// START THE SERVER
app.listen(port, () => {
  console.log(`App successfully started on ${port}`)
});
