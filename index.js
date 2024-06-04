const express = require('express');
//const users = require('./data.json')
const fs = require('fs');
const app = express();
const { connectMongoDb } = require('./connection')
const { type } = require('os');
const PORT = 8000;
const { logReqRes } = require("./middlewares")
const userRouter = require('./routes/user')

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/node-app1");




//Middleware
app.use(express.urlencoded({ extended:false }))

//Routes:
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port : ${PORT}`)
});

app.use(logReqRes("log.txt"))



app.use("/api/users", userRouter)





