const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const allChefData = require("./Data/japaneseChef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ siteName: "Chef recipe hunter" });
});

app.get("/allChefData", (req, res) => {
  res.send(allChefData);
});

app.get("/allChefData/:id", (req, res) => {
  const id = req.params.id;
  const singleChefData = allChefData.chefs.find((chef) => chef.chefId === id);
  res.send(singleChefData);
});

app.listen(port, () => {
  console.log("Chef recipe hunter server is running");
});
