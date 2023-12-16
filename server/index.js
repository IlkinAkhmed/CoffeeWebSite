const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/productRoute");

const app = express();

app.use(cors());

app.use(express.json());


app.use('/cafenaproducts', router)

mongoose.connect('mongodb+srv://ilkin:ilkin123@cluster0.ghwwmer.mongodb.net/').catch((err) => console.log("Db not connect" + err));

app.listen(5000, () => {
    console.log("server 5000 portunda isleyir");
});
