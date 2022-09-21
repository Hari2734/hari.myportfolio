// import React, { useState } from'react'
// import { Grid,Paper,TextField,Button,Avatar } from '@mui/material';
// import Axios from'axios'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import'./register.css'

// const Register=()=>{
// const[username,setUsername]=useState("")
// const[email,setEmail]=useState("")
// const[mobile,setMobile]=useState("")
// const[password,setPassword]=useState("")
// const [error,setError]=useState("");
// const register=()=>{
//   Axios.post("https://reqres.in/api/register",{
//     username,
//     email,
//     mobile,
//     password,
//   }).then(res =>{
//      console.log('res >>>',res)
//   }).catch(error =>{
//      console.error('error >>>',error)
//   })
//  setError(null);
// }
// const paperStyle={padding:20,height:"80vh",width:300,margin:"2px auto",backgroundColor:"gray",boxShadow:'4px 4px 4px 4px #FF7200 '}
// const buttonStyle={margin:"20px 90px",backgroundColor:"#FF7200" }
// const avatarStyle={backgroundColor:'#FF7200'}
// const headingStyle={color:"#FF7200",backgroundColor:"white",padding: "8px",width:"150px",textalign:"center"}
// const inputstyle={backgroundColor:"white",margin:"10px"}

// return(
//     <div className="mainn">
//     <Grid >
//     <Paper  elevation={20} style={paperStyle}>
//       <Grid align='center'>
//       <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//       <h4 style={headingStyle}>Register</h4>
//       </Grid>
//       <TextField label="Username" variant="filled" color="warning" focused fullWidth required style={inputstyle} onChange={(e)=>setUsername(e.target.value)}/><br/>
//       <TextField label="email" variant="filled" color="warning" focused fullWidth required style={inputstyle} onChange={(e)=>setEmail(e.target.value)}/><br/>
//       <TextField label="mobile no" variant="filled" color="warning" focused fullWidth required style={inputstyle} onChange={(e)=>setMobile(e.target.value)}/><br/>
//       <TextField  label="Password" variant="filled" color="warning" focused type='password' fullWidth required style={inputstyle} onChange={(e)=>setPassword(e.target.value)}/><br />
//       {error && <p className="error">{error}</p>}
//       <Button type='submit' variant='contained' style={buttonStyle} onClick={register} ><b>Submit</b></Button>
//     </Paper>
//     </Grid>
//     </div>
// )
// }
// export default Register