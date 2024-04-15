"use client";

import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import { Axios } from "axios";

export default function Login(){

    const [user , setUser]=useState({

        email:"",
        password:"",
       

    })

    const Login =async()=>{


    }

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>SignUp</h1>

       
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" placeholder="Email" id="Email" onChange={(e)=>setUser({...user,email:e.target.value})} />
        <label htmlFor="password">password</label>
        <input type="text" name="password" placeholder="password" id="password" onChange={(e)=>setUser({...user,password:e.target.value})} />

<button onProgress={Login}
 style={{padding:8,backgroundColor:'blue',borderRadius:7,marginTop:6}}>
    <h1>Submit</h1>
</button>

<div>

<div>
   
    <Link href="/signup">SignUp</Link>
</div>

</div>


        </div>
    )

}