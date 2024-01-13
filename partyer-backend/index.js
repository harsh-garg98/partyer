const express = require("express");
const app = express();
const notes = require("../db.json");

app.get("/", (req, res) => {
  res.json(notes);
});

app.get("/roles_examples", (req, res) => {
  res.json(notes["roles_examples"]);
});
app.get("/roles_examples/:id", (req, res) => {
  const id = req.params.id;
  const all_examples = notes["roles_examples"];
  const example = all_examples.find((note) => note.id.toString() === id);
  res.json(example);
});

app.get("/themes_examples", (req, res) => {
  res.json(notes["themes_examples"]);
});
app.get("/themes_examples/:id", (req, res) => {
  const id = req.params.id;
  const all_examples = notes["themes_examples"];
  const example = all_examples.find((note) => note.id.toString() === id);
  res.json(example);
});

app.get("/example_party", (req, res) => {
  res.json(notes["example_party"]);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
