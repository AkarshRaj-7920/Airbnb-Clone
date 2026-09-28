// Enviormental Configuration
const dotenv = require('dotenv');
dotenv.config();

// Import Modules
import type { Application, NextFunction, Request, Response } from 'express';
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app: Application = express();
// CORS Configuration
app.use(cors());
app.use(cookieParser())
// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World</h1>')
    next()
})

// Export App
module.exports = app;