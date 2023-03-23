const express = require("express");

const app = express();
const PORT = 4000;

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:o52PETFSyMhlU3nF@cluster0.htui6.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const noteSchema = new mongoose.Schema({
  content: String,
});
const Note = mongoose.model("Note", noteSchema);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

app.get("/notes", (req, res) => {
  Note.find({}, (err, found) => {
    if (!err) {
      res.send(found);
    }
    console.log(err);
    res.send("Some error occured!");
  }).catch((err) => console.log("Error occured, " + err));
});
