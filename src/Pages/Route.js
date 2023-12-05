import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Pages/Logins';
import Signup from './Pages/Signup';

import Home from './Pages/Home';
const Navigate=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="login" element={<Logins/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default Navigate