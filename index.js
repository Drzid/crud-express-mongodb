import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js"
import {config} from "dotenv";
import cors from "cors";
config();

const app = express();

const PORT = 3000;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
app.use(express.json());
app.use ('/api/product', route);

    app.listen(PORT, () =>{
        console.log(`Server running at port ${PORT}`)
    });



