import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

export const mongoDBURL = process.env.MONGO_DB_URL; // Retrieve MongoDB URL from environment variables
export const PORT = process.env.PORT || 555; // Use PORT from environment variables or default to 555
