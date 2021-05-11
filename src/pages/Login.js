import { Button, Card, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Card style={{margin:100, padding:20 ,width: 500, display:'flex',flexDirection:'column',justifyContent:'center'}} >
            <Link style={{textDecoration: "none",textAlign:'center'}}>
            <h2 >Login</h2>
            </Link>
        
           <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItem:'center'}}  method="POST">
            {/* email */}
           <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
           <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Email"
          type="email"
          value={email} onChange={e => setEmail(e.target.value)} required
        /></div>
        {/* password */}
           <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
           <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Password"
          type="password"
          value={password} onChange={e => setPassword(e.target.value)} required
        />
           </div>
           <Button style={{margin:10}} type="submit" variant="contained" onClick={signIn}  color="primary">Login</Button>
    </form>

       


        <p style={{textAlign:'center'}}>* If you don't have Account please create one</p>
        
        <Link style={{textDecoration: "none",textAlign:'center'}} to='/signup'>
        <Button style={{margin:10}}variant="contained"color="primary">SignUp</Button></Link>
        </Card>
        </div>
    )
}

export default Login
