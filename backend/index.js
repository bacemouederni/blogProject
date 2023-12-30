import express from 'express';
import bodyparser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express()

const port= 8081;
import router from './routes/router.js';

// configiration de dotenv pour securite 

dotenv.config({path:"config.env"});
app.use(bodyparser.urlencoded({ extended: true }));
//configuration de dossier views




app.use(express.static( "public"));
import connectDB from './config/db.js';

connectDB()

app.listen(port, function () {
    console.log(`server running in http:/localhost:${port}`);


});
app.use(cors({origin:'*'}))
app.use(bodyparser.json());

app.use(router)


