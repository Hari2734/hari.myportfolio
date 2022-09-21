import React,{useState,useEffect} from 'react'
import Axios from "axios";
import {Link} from 'react-router-dom'

const Listresource=()=>{
    const[Resource,setResource]=useState([]);
    useEffect(()=>{
        Axios.get("https://reqres.in/api/resource").then((res)=>{
            console.log(res.data.data)
            setResource(res.data.data)
        })
    },[]);

    return (
    <div>
        <h3 className="text-center">RESOURCE</h3>
        <table className="table table-dark table-striped tbl-style">
            <thead>
                <tr>
                    <td>No</td>
                    <td><h4><b>Name</b></h4></td>
                   <td><h4><b>Action</b></h4></td>
                    </tr>
            </thead>
            <tbody>
                {
                    Resource.map((data,index)=>{
                        return(
                           <tr>
                               <td>{index+1}</td>
                               <td>{data.name}</td>
                              <td><Link to={`/Singleresource/${index+1}`} className="btn btn-secondary">ViewDetails</Link></td>
                                </tr>
                        )
                    })
                }
            </tbody>
        </table>
         </div>
    )
}
export default Listresource