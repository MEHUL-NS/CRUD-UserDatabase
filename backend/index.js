import express from 'express'
import Con from './database/db.js';
import dotenv from 'dotenv'
import cors from 'cors' 
import bodyParser from 'body-parser';
import router from './routes/routes.js'

const app = express();


dotenv.config()
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000

app.use(bodyParser.json({extended:true})) 
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

Con(username,password);

app.use('/' , router)

app.listen(PORT , ()=>{console.log(`Server running on PORT : ${PORT}`)})
