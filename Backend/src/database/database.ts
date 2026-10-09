// Import Modules
import "dotenv/config"
import { PrismaPg } from '@prisma/adapter-pg';
// @ts-ignore Generated client lives outside src/rootDir.
import { PrismaClient } from '../../generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;

if(!connectionString) {
    throw new Error("Database url not defined");
}

const adapter = new PrismaPg({
    connectionString
})

const prisma = new PrismaClient({
    adapter,
})

export const connectToDb = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to Database');
    } catch (error) {
        console.log(`Error connection to Database ${error}`)
        throw error;        
    }
}

export default prisma