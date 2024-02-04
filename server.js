import pkg from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = pkg();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

//mongo db url
const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wikadid.mongodb.net/?retryWrites=true&w=majority`;



Connection(URL);

if (process.env.NODE_ENV==='production'){
    app.use(express.static('flipkartClone/build'))
}

app.listen(PORT, ()=>console.log(`Server is running on PORT ${PORT}`));

DefaultData();