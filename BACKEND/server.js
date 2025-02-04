//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require("dotenv").config(); //reads the .env files

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; //defining mongo url

mongoose.connect(URL, {
    //DB connection options
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false 
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Successfully connected to MongoDB !");
});

//student route
const studentRouter = require("./routes/students.js");
app.use("/student", studentRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});