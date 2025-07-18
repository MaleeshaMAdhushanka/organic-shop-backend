import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const MONGO_DB_URL = process.env.MONGO_DB_URL as string; // Default to local MongoDB if not set
const DBConnection = async () => {

    try{
        const connection = await mongoose.connect(MONGO_DB_URL);
        return `Successfully connected to the MONGODB: ${connection.connection.host}`;

    } catch (error) {
        return "MONGO DB connection Error:" +error;
    }
}
export default DBConnection;
