

import {connect} from '../../../dbconfig/dbconfig.js'
import User from '../../../../models/Usermodel.js'
import { NextRequest,NextResponse } from 'next/server.js'
import bcryptjs from 'bcryptjs';


connect()

export async function Post(request : NextRequest){

    try {
         const reqBody = await request.json()

         const { email ,username ,password} = reqBody

         console.log(reqBody)

         //check if user exist 
         const user = await User.findOne({email})


         if (user) {
            return NextResponse.json({error:"User already exist"},
                {status:400}
            )}
    

            //hash password
            const Salt = await bcryptjs.genSalt(10);
           const hashPassword =  await bcryptjs.hash(password ,Salt)


         const newUser =  new User({
            username,
            email,
            password:hashPassword
           })

          const savedUser = await newUser.save()
          console.log(savedUser)

          return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
        })




            
    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:500}
        )

        
    }

}