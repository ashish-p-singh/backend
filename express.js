import express from "express";
import blog from "./routes/blog.js";
import fs from "fs";
const app = express();
const port = 3000;

app.use((req, res, next) => {
  fs.appendFileSync(
    "log.txt",
    `The type of request on ${new Date().toLocaleString("en-IN")} is a ${req.method}\n`,
  );
  next();
});
app.use(express.static("public"));
app.use("/blog", blog);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.get("/index", (req, res) => {
  res.sendFile(
    "C:\\Users\\techn\\OneDrive\\Documents\\vs code 2\\backend\\templates\\index.html",
  );
});
app.post("/", (req, res) => {
  res.send("This is post request");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
