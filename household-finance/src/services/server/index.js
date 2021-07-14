const express = require("express");
const app = express();
const routes = require('../routes/index')

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log("running at localhost:3333");
});
