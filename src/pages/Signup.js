import { Button, Card ,TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import './Signup.css'




function Signup() {
   const history = useHistory();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [profession, setProfession] = useState('');
   const [password, setPassword] = useState('');
   
   const register = e =>{
    e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
   }
    return (
        <div className="signup">
             <Card style={{margin:100, padding:20 ,width: 500, display:'flex',flexDirection:'column',justifyContent:'center'}} >
            <Link style={{textDecoration: "none",textAlign:'center'}}>
            <h2 >SignUp</h2>
            </Link>
        
           <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItem:'center'}}  method="POST">
           {/* name */}
           <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
          <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Name"
          value={name}
          onChange= {e  => setName(e.target.value)}
          type="text"
           required
        /></div>
          {/* email */}

           <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
           <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Email"
          value={email}
          onChange= {e  => setEmail(e.target.value)}
          type="email"
          autoComplete="current-password" required
        /></div>
         {/* phone */}
         <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
           <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Phone Number"
          value = {phone}
          onChange= {e  => setPhone(e.target.value)}
          type="number"
           required
        /></div>

        {/* profession */}
        
        <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
           <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Profession"
          value={profession}
          onChange= {e  => setProfession(e.target.value)}
          type="text"
           required
        />
        </div>

         {/* password */}
           <div style={{display:'flex',alignItem:'center',justifyContent:'space-evenly' ,margin:10}}>
           <TextField style={{width:"100%"}}
          id="standard-password-input"
          label="Password"
          type="password"
          value={password}
          onChange= {e  => setPassword(e.target.value)} 
           required
        />
           </div>
           <Button onClick={register} style={{margin:10}} type="submit" variant="contained" color="primary">SignUp</Button>
        </form>

    <p style={{textAlign:'center'}}>* If you already have account please login</p>
        
        <Link style={{textDecoration: "none",textAlign:'center'}} to='/'>
        <Button style={{margin:10}}variant="contained"color="primary">Login</Button></Link>
        </Card>
        </div>
    )
}

export default Signup
