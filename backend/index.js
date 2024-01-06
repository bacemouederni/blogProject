import express from 'express';
import bodyparser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';


const app = express()

const port= 8081;
import router from './routes/router.js';

// configiration de dotenv pour securite 

dotenv.config({path:"config.env"});
app.use(bodyparser.urlencoded({ extended: true }));
//configuration de dossier views




app.use('/uploads',express.static( "./public/uploads"));
import connectDB from './config/db.js';

connectDB()

app.listen(port, function () {
    console.log(`server running in http:/localhost:${port}`);


});
app.use(cors({origin:'*'}))
app.use(bodyparser.json());
/*const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, '/public/uploads/')));*/
app.use(router)


