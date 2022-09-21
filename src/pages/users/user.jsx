import React,{useState,useEffect} from 'react'
import Axios from "axios";
import {Link} from 'react-router-dom'


const User=()=>{
const[userData,setUserData]=useState([]);
const[name,setname]=useState('');
const[email,setemail]=useState('')

const getUserData=()=>{
    Axios.get("https://reqres.in/api/users").then((res)=>{
            console.log(res.data.data)
            setUserData(res.data.data)
        })
}
const createdata=(e)=>{
    e.preventDefault();
    const postdata={
        name:name,
        email:email,
    };
    Axios.post(`https://reqres.in/api/users`,postdata).then(res=>{
        console.log(res.data)
        getUserData(res.data)
    })
}
const Deletedata=()=>{
    Axios.delete("https://reqres.in/api/users").then((res)=>{
        console.log(res)
    })
}
useEffect(()=>{
    getUserData()
    },[])

    return (
    <div>
        <h3 className="text-center">USERS</h3>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                <td><h4><b>NO</b></h4></td>
                    <td><h4><b>Email</b></h4></td>
                   <td><h4><b>Action</b></h4></td>
                   <td><h4><b>Update</b></h4></td>
                   <td><h4>Delete</h4></td>
                    </tr>
            </thead>
            <tbody>
                {
                    userData.map((data,index)=>{
                        return(
                           <tr>
                               <td>{index+1}</td>
                               <td>{data.email}</td>
                              <td><Link to={`/singleuser/${index+1}`} className="btn btn-outline-secondary">Details</Link></td>
                              <td><Link to={`/Update/${index+1}`} className="btn btn-outline-secondary">Update</Link></td>
                              <td><button className="btn btn-outline-secondary" onClick={Deletedata}>Delete</button></td>
                                </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
            <h2>create data</h2>
            <form onSubmit={createdata}>
                <input onChange={(e)=>setname(e.target.value)} id="name" value={name} type="text" placeholder="name"/><br />
                <input onChange={(e)=>setemail(e.target.value)} id="email" value={email} type="text" placeholder="email"/><br />
                <button type="submit">create</button>
            </form>
        </div>
         </div>
    )
}
export default User
