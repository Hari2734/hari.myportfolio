// import React,{ useState} from'react'
// import { Grid,Paper,TextField,Button,Avatar } from '@mui/material';
// import Axios from'axios'
// import './login.css'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const Login=(props)=>{
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [error,setError]=useState("");
 
// const login=()=>{
//   Axios.post("https://reqres.in/api/login",{
//     email:email,
//     password:password,
//   }).then(res =>{
//      console.log('res >>>',res)
//   }).catch(error =>{
//      console.error('error >>>',error)
//   })
//   if(email==="eve.holt@reqres.in" && password==="cityslicka"){
//     props.history.push("/listuser");
//   }else{
//     alert("Login unsuccessful")
//   }
//  setError(null);
// }

// const paperStyle={padding:20,height:"55vh",width:300,margin:"2px 70%",backgroundColor:"black" }
// const buttonStyle={margin:"20px 90px",backgroundColor:"#FF7200" }
// const avatarStyle={backgroundColor:'#FF7200'}
// const headingStyle={color:"#FF7200",backgroundColor:"white",padding: "8px",width:"150px",fontfamily:"sans-serif",textalign:"center",borderradius:"10px"}
// const inputstyle={backgroundColor:"white",margin:"10px"}
// const prghStyle={color:"white"}
//   return(
//     <div className="main">
//       <div >
//       <Grid >
//       <Paper  elevation={20} style={paperStyle}>
//         <Grid align='center'>
//             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//             <h4 style={headingStyle}>Login</h4>
//             </Grid>
//              <TextField name="email" label="Email" variant="filled" color="warning" focused fullWidth required style={inputstyle} onChange={(e)=>setEmail(e.target.value)}/><br/>
//              <TextField  label="Password" variant="filled" color="warning" focused type='password' fullWidth required style={inputstyle} onChange={(e)=>setPassword(e.target.value)} /><br />
//               {error && <p className="error">{error}</p>}
//              <Button type='submit' variant='contained' style={buttonStyle} onClick={login} ><b>Submit</b></Button>
//              <Grid>
//                <p style={prghStyle}>Do you have an account?<a href="/register">register</a></p> 
//              </Grid>
//        </Paper>
//             </Grid>
//       </div>
//     </div>
//   )   
// }
// export default Login