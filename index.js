import express from "express";

const app = express();

app.get ('/', (req,res) => {res.send('Welcome to Home')})

app.listen('3000',()=> {console.log("Server Running : Port 3000");});
