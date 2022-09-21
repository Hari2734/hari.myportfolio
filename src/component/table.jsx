import React, { useEffect, useState } from'react'
import Axios from'axios'

const Table=()=>{
    const[Tabledata,setTabledata]=useState([])

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res)
            setTabledata(res.data)
        })
    },[])



    return(

        <div>
            <h1 className="text-center">Table</h1>
            <div >
                <table className="table ">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>username</td>
                            <td>email</td>
                            <td >address </td>





                            <td>phoneno</td>
                            <td>website</td>
                            <td>company</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Tabledata.map((data)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        street:{data.address.street}<br/>
                                       suite:{data.address.suite}<br/>
                                    city:{data.address.city}<br/>
                                    
                                    zipcode:{data.address.zipcode}<br/>
                                    </td>
                                   
                                    {/* <td>geo:{data.address.geo.lat}</td> */}
                                    <td>{data.phone}</td>
                                    <td>{data.website}</td>
                                    <td>{data.company.name}</td>
                                    <td>{data.company.catchPharse}</td>
                                    <td>{data.company.bs}</td>
                                </tr>
                            )


                        })}

                       

                    </tbody>
                </table>
            </div>
        </div>
    )


}
export default Table