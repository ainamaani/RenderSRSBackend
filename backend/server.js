const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const RegistrationRoutes = require("./routes/RegistrationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.method, req.path, req.body);
    next();
})

// routes
app.use("/api/registration", RegistrationRoutes);


mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Registration system connected");
        })
    })
    .catch((err)=>{
        console.log(err);
    })