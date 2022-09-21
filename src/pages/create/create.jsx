import axios from 'axios';
import React, { useState } from 'react'

const Create=()=>{
    const[name,setname]=useState('');
    const[email,setemail]=useState('')

    const createdata=(e)=>{
        e.preventDefault();
        const postdata={
            name,
            email,
        };
        axios.post(`https://reqres.in/api/users`,postdata).then(res=>{
            console.log(res)
        })
    }
    return(
        <div>
            <form onSubmit={createdata}>
                <input onChange={(e)=>setname(e.target.value)} id="name" value={name} type="text" placeholder="name"/><br />
                <input onChange={(e)=>setemail(e.target.value)} id="email" value={email} type="text" placeholder="email"/><br />
                <button type="submit">create</button>
            </form>
        </div>
    )
}
export default Create