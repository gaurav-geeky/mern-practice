const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/home", (req, res, next) => {
    res.send("ok home page crud..");
})

const port = 9111;
app.listen(port, () => {
    console.log(`server connected to port ${port}`)
})