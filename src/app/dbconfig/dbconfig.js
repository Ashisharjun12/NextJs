import mongoose from 'mongoose'

export async function connect(){

    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection;
        
        connection.on('Connected',()=>{
            console.log("Database connected")
        })

        connection.on('Error',(err)=>{
            console.log('MongoDb Connection Error' + err);
            process.exit()

        })

    } catch (error) {
        console.log("something went wrong")
        console.log(error)
        
    }


}