import dotenv from 'dotenv'
dotenv.config();

export const PORT = 5555;
export const MONGODB_URI = process.env.MONGODB_URI;
