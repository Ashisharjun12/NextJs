import { connect } from "../../../dbconfig/dbconfig.js";
import User from "../../../../models/Usermodel.js";
import { NextRequest, NextResponse } from "next/server.js";
import bcryptjs from "bcryptjs";
import jwtwebtoken from'jsonwebtoken'

connect();

export async function Post(request: NextRequest) {
  try {
      const reqBody =  request.json()

        const {email,password} =reqBody

        console.log(reqBody)

        //user  exist 
const user = await User.findOne({email})
if(!user){
        return NextResponse.json({error :"User Doesn't Exist"},{status:400})

}

//check passwordcorect or not

const validPassword = await bcryptjs.compare(password,user.password)
if (!validPassword) {
    console.log("password not correct")
    
}

//create token data

const tokendata ={
    id:user._id,
    email:user.email,
    username:user.username,
 

}

//token secret

const token = await jwt.signin(tokendata,process.env.TOKEN_SECRET!,{expiresIn:"1hr"})



  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    },{status:500});
  }
}
