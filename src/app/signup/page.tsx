"use client";

import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup(){

    const router = useRouter()

    const [user , setUser]=useState({

        email:"",
        password:"",
        username:""

    })

    const Signup =async()=>{

        try {
          const response =   await axios.post("/api/users/signup",user);
          console.log("signup success",response.data);
          toast.success("signup success!!")
          router.push('/login')
        } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
            
        }


    }

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>SignUp</h1>

        <label htmlFor="Username">Username</label>
        <input style={{color:'black'}} type="text" name="username" placeholder="username" id="username" onChange={(e)=>setUser({...user,username:e.target.value})} />
        <label htmlFor="Email">Email</label>
        <input style={{color:'black'}} type="text" name="Email" placeholder="Email" id="Email" onChange={(e)=>setUser({...user,email:e.target.value})} />
        <label htmlFor="password">password</label>
        <input style={{color:'black'}} type="text" name="password" placeholder="password" id="password" onChange={(e)=>setUser({...user,password:e.target.value})} />

<button onProgress={Signup}
 style={{padding:8,backgroundColor:'blue',borderRadius:7,marginTop:6}}>
    <h1>Submit</h1>
</button>

<div>

<div>
   
    <Link href="/login">Login</Link>
</div>

</div>


        </div>
    )

}