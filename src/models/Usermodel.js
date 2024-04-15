import mongoose from 'mongoose'
import { type } from 'os';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true ,"Please Provide Username!"],
        unique: true
    },

    email:{
        type: String,
        required: [true ,"Please Provide Email!"],
        unique: true
    },
    password:{
        type: String,
        required: [true ,"Please Provide Password!"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpriy:Date,
    verifyToken:string,
    verifyTokenExpiry:Date

})


 const Users = mongoose.models.users || mongoose.model("Users",userSchema)

 export default Users;