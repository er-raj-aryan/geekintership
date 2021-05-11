import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MovieList from './MovieList'
import axios from "axios";
import { db } from './firebase';
import firebase from 'firebase';
import './Home.css'

function Home() {
    const [input, setInput] = useState('');
    const [messages, setMessage] = useState([]);
    const [username, setUsername] = useState('');
  
  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc =>({id: doc.id,message :doc.data()}) ))

    })
    
  },[]);

  const logout = (event) => {
    event.preventDefault();
    window.location.href='/'

  }

  
const today = new Date();
const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()

    const getData = () =>{ 
    const pin = parseInt(document.getElementById('pinCode').value)
    console.log(pin);
    console.log(date);

    const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+date+''
    fetch(url).then((res) => {
    return res.json();
    }).then((data) => {
    var temp = '';
    for( var i =0 ; i < data.sessions.length ; i++){
        temp += '<tr>';
        temp += '<td align="left" className=" border-b-1 border-gray-200  px-4 py-3">'+data.sessions[i].name+'</td>&nbsp;&nbsp;&nbsp;&nbsp;';
        temp += '<td align="left" className=" border-b-1 border-gray-200 px-4 py-3 ">'+data.sessions[i].state_name+'</td>';
        temp += '<td align="left" className=" border-b-1 border-gray-200 px-4 py-3">'+data.sessions[i].district_name+'</td>';
        temp += '<td align="left" className=" border-b-1 border-gray-200 px-4 py-3">'+data.sessions[i].available_capacity+'</td>';
        temp += '<td align="left" className=" border-b-1 border-gray-200 px-4 py-3">'+data.sessions[i].fee+'</td>';
        temp += '<td align="left" className="border-b-1 border-gray-200 px-4 py-3">'+data.sessions[i].vaccine+'</td>';
        temp += '<td align="left" className=" border-b-1  border-gray-200 px-4 py-3 ">&nbsp;&nbsp;&nbsp;&nbsp;'+data.sessions[i].min_age_limit+'</td></tr>';
    }
    
    document.querySelector('#content').innerHTML = temp ;
        

    })
}
  

    return (
        <div className='home' >
          <Grid container spacing={2} className='home-container' >
            <Grid item>
            <h1>Vaccine Center Information</h1>
            </Grid>
          <Grid item className='home-input'>
            
    
    <input  id="pinCode" placeholder="Please enter pincode" className=''  />
    <Button type='submit' onClick= {getData}  variant="contained" color="primary" className='btn  '>Search</Button>
    </Grid>
  
    
    <Grid  id='table-data' >
    <Table  className="table-auto  text-left whitespace-no-wrap  ">
        <TableHead>
          <TableRow className='header'>
            <TableCell align="left" className="px-4 py-3 border-b-2 tracking-wider font-medium   bg-gray-100 bg-opacity-10 ">Name</TableCell>
            <TableCell align="left" className="px-4 py-3  border-b-2 tracking-wider font-medium  bg-gray-100 bg-opacity-10">State</TableCell>
            <TableCell align="left" className="px-4 py-3 border-b-2 title-font tracking-wider font-medium  bg-gray-100 bg-opacity-10">District</TableCell>
            <TableCell align="left" className="px-4 py-3  border-b-2 font-medium  bg-gray-100 bg-opacity-10">Avilable</TableCell>
            <TableCell align="left" className="px-4 py-3 border-b-2 tracking-wider font-medium  bg-gray-100 bg-opacity-10">Fee</TableCell>
            <TableCell align="left" className="px-4 py-3 border-b-2 tracking-wider font-medium  bg-gray-100 bg-opacity-10">Vaccine</TableCell>
            <TableCell align="left" className="px-4 py-3 border-b-2 tracking-wider font-medium  bg-gray-100  bg-opacity-10">Age </TableCell>
          </TableRow>
        </TableHead>
        <TableBody id='content' >
          
        </TableBody>
      </Table>
      </Grid>    

      <Grid item >
      <Button onClick={logout} style={{margin:10}} type="submit" variant="contained" color="primary">Logout</Button>
      </Grid>
      
      </Grid>

        </div>
        
    )
}

export default Home
