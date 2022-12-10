const express = require("express")
const dotenv = require("dotenv").config()

const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/forms")
const responseRoutes = require("./routes/response")

mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("DB connected...");
  },
  (err) => console.log(err)
);


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api/forms", formRoutes )
app.use("/api/response", responseRoutes )


app.listen(process.env.PORT || 8800, ()=> console.log("Server connected to port "+process.env.PORT));