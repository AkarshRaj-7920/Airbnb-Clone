// Enviormental Configuration 
const dotenv = require('dotenv');
dotenv.config();

// Import Modules
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res, next) => {
    res.send('<h1>Hello shotgun</h1>')
    next()
})



module.exports = app;