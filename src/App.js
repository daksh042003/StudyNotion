
import './App.css';
import Navbar from "./Navbar";
import { Route,Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from './Dashboard';
import {useState} from 'react';

function App() {
 
  const [isLoggedIn , setIsLoggedIn] =useState(false);

  return(
     <div>
      <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/login'  element={<Login/>}></Route>
        <Route path='/signup'  element={<Signup/>}></Route>
        <Route path='/dashboard'  element={<Dashboard/>}></Route>
      </Routes>
     </div>
  );
}

export default App;
