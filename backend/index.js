import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import cors from "cors";
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
import {data} from './controllers/dataController.js'

app.use(cors());
app.use(express.json());

data()

// app.use('/',web)


// db 
connectDB(DATABASE_URL)



app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
