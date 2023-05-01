const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ siteName: "Chef recipe hunter" });
});

app.listen(port, () => {
  console.log("Chef recipe hunter server is running");
});
