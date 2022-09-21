import React,{useState} from 'react'
import Axios from "axios";

const Update=()=>{
const[dob,setdob]=useState('');
const[age,setAge]=useState('')
const Updatedata=(e)=>{
    e.preventDefault();
    const updatedata={
        dob:dob,
        age:age,}
    Axios.put(`https://reqres.in/api/users`,updatedata).then((res)=>{
        console.log(res)
    })
}
    return(
        <div>
            <h2>update data</h2>
            <form onSubmit={Updatedata}>
            <input onChange={(e)=>setdob(e.target.value)} value={dob} type="date" placeholder="DOB"/><br />
            <input onChange={(e)=>setAge(e.target.value)} value={age} type="number" placeholder="Age"/><br />
            <button type="submit">update</button>
            </form>
        </div>
    )
}
export default Update