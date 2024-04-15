"use client";

import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import { Axios } from "axios";

export default function Signup(){

    const [user , setUser]=useState({

        email:"",
        password:"",
        username:""

    })

    const Signup =async()=>{


    }

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>SignUp</h1>

        <label htmlFor="Username">Username</label>
        <input type="text" name="username" placeholder="username" id="username" onChange={(e)=>setUser({...user,username:e.target.value})} />
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" placeholder="Email" id="Email" onChange={(e)=>setUser({...user,email:e.target.value})} />
        <label htmlFor="password">password</label>
        <input type="text" name="password" placeholder="password" id="password" onChange={(e)=>setUser({...user,password:e.target.value})} />

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