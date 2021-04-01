import React from 'react'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Header from './component/Header';


function App() {
  return (
    
    <div className="app">
      <Router>
      <Switch>  
        <Route path='/signup'>
          <Header />
          <Signup />
        </Route>
        <Route path='/home'>
          <Header />
          <Home />
        </Route>
        <Route path='/'>
        <Header />
         <Login />
        </Route>
      </Switch>
      </Router>
    </div>
   
  );
}

export default App;
