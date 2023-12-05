import React from 'react';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const handlerBack=()=>{
        navigate("/signup");
      }
  return (
    <>
    <div><h1>This is home page</h1></div>
    <div><Button onClick={handlerBack}>Back</Button>
    </div>
    </>
  )
}

export default Home