const express = require("express");
const app = express();

// const port = process.env.PORT
const portr = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
