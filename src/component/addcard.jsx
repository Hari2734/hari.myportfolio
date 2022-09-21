import React from'react'
import {useSelector,useDispatch}from'react-redux'

const Selectcard=()=>{
    const selectedcard=useSelector((state)=>state.selectedcard)
    const dispatch=useDispatch()

    const deletecard=(index)=>{
        
        dispatch({type:"deletecard",payload:index})
    }

return(
<div>
    <h1>SELECTED CARD</h1>
    <div className="row">
         {selectedcard.map((data,index)=>{
             return(
                 <div className="card col-md-2 m-3">
                <h6>id:{data.id}</h6>
                <h6>name:{data.name}</h6>
                <h6>username:{data.username}</h6>
                <h6>email:{data.email}</h6>
                {/* <h6>address:{data.address}</h6> */}
                <h6>phoneno:{data.phone}</h6>
                <h6>website:{data.website}</h6>
                <h6><button className="btn btn-primary" onClick={()=>{deletecard(index)}}>delete</button></h6>
                </div>
             )
         })}
     </div>
</div>
)}
export default Selectcard