
import './App.css';
import Navbar from "./Navbar";
import { Route,Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from './Dashboard';
import {useState} from 'react';
import About from './About';
import Contact from './Contact';



function App() {
 
  const [isLoggedIn , setIsLoggedIn] =useState(false);

  return(
     <div>
      <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/login'  element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup'  element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard'  element={<Dashboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
     </div>
  );
}

export default App; 
