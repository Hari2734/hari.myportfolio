import React, { useEffect, useState } from'react'
import{ Link }from'react-router-dom'
import {useSelector , useDispatch} from'react-redux'
import Axios from'axios'

const Card=()=>{
    const[cardData,setcardData]=useState([])
    const testdata= useSelector((state)=>state.selectedcard)

    const dispatch=useDispatch()

    const addCard=(data)=>{

        dispatch({type:"addcard",payload:data})
    }
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res)
            setcardData(res.data)
        })
    },[])
return(

 <div >
     <Link to="/addcard">go to selected card</Link>
     <h1>card</h1>

     <div className="row">
         {cardData.map((data)=>{
             return(
                 <div  className="card col-md-2 m-3">
                <h6>id:{data.id}</h6>
                <h6>name:{data.name}</h6>
                <h6>username:{data.username}</h6>
                <h6>email:{data.email}</h6>
                {/* <h6>address:{data.address}</h6> */}
                <h6>phoneno:{data.phone}</h6>
                <h6>website:{data.website}</h6>
                <h6>
                    <button className="btn btn-primary" onClick={()=>{addCard(data)}}>Add</button>
                </h6>
                {/* <h6>company:{data.company}</h6>
        */}
                </div>
             )


         })}
        


     </div>
 </div>
)

}
export default Card