const mongoose=require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const connectDB=async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useUnifiedTopology: true 
        }).then(() => console.log( 'Database Connected' ))
        .catch(err => console.log( err ));;
        console.log(`Server running Successfully with mongoose ${mongoose.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDB