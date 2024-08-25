const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    if (err) {
      console.log(err);
    }
    else res.render("index", { files });
  });
});

app.get("/create", (req, res) => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = String(currentDate.getFullYear());
  const date = `${day}-${month}-${year}.txt`;

  fs.writeFile(`./files/${date}`, "hey", (err) => {
    if (err) {
      console.log(err);
    }
    res.send("file created");
  });
});


app.listen(3000);
