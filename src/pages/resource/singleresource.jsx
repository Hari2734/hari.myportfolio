import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import{Link,useParams} from 'react-router-dom'

function Singleresource() {
    const[resourceDetails,setResourceDetails]=useState({});
    let { id } = useParams();

    useEffect(()=>{
        Axios.get(`https://reqres.in/api/resource/${id}`).then((res)=>{
            console.log("gg",res.data);
         setResourceDetails(res.data.data)
        })
    },[])
    console.log("resourceDetails",resourceDetails)
     const cardstyle={width:"20rem",padding:"10px",margin: "10px auto", background:"gray",}
    return (
        <div className="card" style={cardstyle}>
            <h6><b>ID : </b>{resourceDetails.id}</h6>
                            <h6><b>Name : </b>{resourceDetails.name}</h6>
                            <h6><b>Year : </b>{resourceDetails.year}</h6>
                            <h6><b>Color : </b>{resourceDetails.color}</h6>
                            <h6><b>Pantone_Value: </b>{resourceDetails.pantone_value}</h6>
                            <button className='btn btn-dark'><Link to='/listresource'><b>Back</b></Link></button>
        </div>
    )
}

export default Singleresource
