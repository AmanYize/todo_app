const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// App config

const app = express();

const port = process.env.PORT || 8000;

const conncetionURL = process.env.MONGO_URI;
//Middlewares
// convert to json

app.use(express.json());
app.use(cors());

// DB config
mongoose
  .connect(conncetionURL)
  .then(() => {
    console.log("Connected to DB");
    // listen to requests
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// API Endpoints
