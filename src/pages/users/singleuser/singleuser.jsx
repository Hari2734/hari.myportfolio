import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Axios from "axios";
function Singleuser() {
  const [userDetails, setUserDetails] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    Axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      console.log(res.data.data);
      setUserDetails(res.data.data);
    });
  }, []);
  const cardstyle = {
    width: "20rem",
    padding: "10px",
    margin: "10px auto",
    background: "gray",
  };
  return (
    <div className="card" style={cardstyle}>
      <h4 className="text-center">
        {userDetails.first_name} {userDetails.last_name}
      </h4>
      <img src={userDetails.avatar} alt="" />
      <h6>
        <b>ID : </b>
        {userDetails.id}
      </h6>
      <h6>
        <b>Email : </b>
        {userDetails.email}
      </h6>
    </div>
  );
}

export default Singleuser;
