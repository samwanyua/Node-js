import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export const PORT = process.env.PORT || 5555;
export const MONGODB_URI = process.env.MONGODB_URI;
