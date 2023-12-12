const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const exp = require("constants");

dotenv.config({ path: "./.env" });

const app = express();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

//Parsed URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

//Parsed JSON bodies (as sent by API client)
app.use(express.json());

app.set("view engine", "hbs");

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected...");
  }
});

//Define routes
app.use("/", require("./routes/pages"));
app.use("/", require("./routes/user"));
app.use("/", require("./routes/leader"));
app.use("/", require("./routes/employee"));
app.use("/", require("./routes/manager"));
app.use("/auth", require("./routes/auth"));

app.listen(5555, () => {
  console.log("Server started on port 5555!");
});
