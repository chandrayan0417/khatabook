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
    } else res.render("index", { files });
  });
});

app.get("/create", (req, res) => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = String(currentDate.getFullYear());
  const date = `${day}-${month}-${year}`;
  res.render("create", { filename: date });
});

app.post("/createhisaab", (req, res) => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = String(currentDate.getFullYear());
  const date = `${day}-${month}-${year}.txt`;

  fs.writeFile(`./files/${date}`, req.body.hisaab, (err) => {
    if (err) return res.status(500).send("Error creating file");

    res.redirect("/");
  });
});

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    if (err) {
      console.log(err);
    } else res.render("edit", { filedata, filename: req.params.filename });
  });
});

app.post("/update/:filename", (req, res) => {
  fs.writeFile(`./files/${req.params.filename}`, req.body.hisaab, (err) => {
    if (err) return res.status(500).send("Error updating file");

    res.redirect("/");
  });
});

app.get("/view/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    if (err) {
      console.log(err);
    } else res.render("view", { filedata, filename: req.params.filename });
  });
});

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) return res.status(500).send("Error deleting file");
    res.redirect("/");
  });
});

app.listen(3000);
