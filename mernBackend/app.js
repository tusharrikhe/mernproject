const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json())

mongoose.connect(
    "mongodb://localhost:27017/DB",
    { useNewUrlParser: true },
    (err, response) => {
        if (err) console.log(err);
        else console.log("Successfully connected to the database");
    }
);

app.use("/api", routes);

const port = 4000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
