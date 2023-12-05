import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'
const Conditional = () => {
  const[state,setState]=useState({isLoggedIn:true});
 return(state.isLoggedIn?<Login/>:<Signup/>)
}
export default Conditional;
