const PORT = 3000;

const express = require("express");

require("dotenv").config();

const app = express();

const connectDB = require("./config/db");
connectDB();

app.set("view engine", "ejs");


app.get("/", async (req, res) => {
  res.render("home");
});

const Link = require("./api/Links");
app.use("/api/link", Link);

  
app.listen(process.env.PORT || PORT,()=>{
    console.log("Running at http://localhost:"+PORT+"/")
});
  