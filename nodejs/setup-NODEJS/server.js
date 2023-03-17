const express = require("express");
const router = require("./router");
const app = express();
var path = require("path");

const PORT = 3003;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/views")));
app.use("/", router);
app.listen(PORT);
console.log("Application running at: " + PORT);
