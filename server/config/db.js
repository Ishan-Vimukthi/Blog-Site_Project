const mongoose = require('mongoose');
require('dotenv').config(); // Import dotenv to use environment variables

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const mongodb_url = process.env.MONGODB_URL; // Use environment variable for MongoDB URL
        const conn = await mongoose.connect(mongodb_url, {
            useNewUrlParser: true, // Recommended to avoid deprecation warnings
            useUnifiedTopology: true // Enables new connection management engine
        });
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
