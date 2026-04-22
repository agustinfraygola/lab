import express from "express"
import mongoose from "mongoose"

const app = express();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("db connected")
    app.listen(PORT, () => {
        console.log("srv running")
    })
}).connect((error) => console.log(error));

app.use("/api/user", route)