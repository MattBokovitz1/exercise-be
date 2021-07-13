const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const weightsData = require("../data/weightsData");

app.get("/weights", (req, res) => {
  res.json(weightsData);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on ${PORT}`);
});
