const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

const stuRouter = require('./route/sturoute');

mongoose.connect('mongodb://localhost:27017/mernCrudFeb26').then(() =>
    console.log("db connected successfully")
).catch((err) => {
    console.log(`db error ${err}`)
})


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors())

app.get("/home", (req, res, next) => {
    res.send("ok home page crud..");
})

app.use('/mycrud', stuRouter);

const port = 9111;
app.listen(port, () => {
    console.log(`server connected to port ${port}`)
});



