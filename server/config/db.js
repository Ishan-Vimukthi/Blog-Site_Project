const mongoose = require('mongoose');
const connectDB = async () => {

    try{
        mongoose.set('strictquery', false);
        mongodb_url = "mongodb+srv://ishan123:<db_password>@cluster0.t6ift.mongodb.net/";
        const conn = await mongoose.connect(mongodb_url);
        console.log('Database Connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;