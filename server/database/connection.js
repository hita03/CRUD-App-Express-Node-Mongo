const mongoose =require('mongoose');
const dotenv = require('dotenv');
const uri ="mongodb+srv://Hita:abohar@cluster0.1beyc.mongodb.net/users?retryWrites=true&w=majority";
dotenv.config();
const connectDB =async()=>{
    try{

        const con =await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        })
        console.log(`MongoDB connected: ${con.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit(1);

    }

}

module.exports = connectDB