// Enviormental Configuration
import dotenv from 'dotenv'
dotenv.config();

// Import Modules
import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectToDb } from './database/database.js'

const app: Application = express();
await connectToDb()

// CORS Configuration
app.use(cors());
app.use(cookieParser());
// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World</h1>')
    next()
})

// Export App
export default app