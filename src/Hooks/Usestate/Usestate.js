import React, {useState}from 'react'

const Usestate = () => {
    const [count,setCount]=useState(0);
    const handlerUp=()=>{
        if(count>0)
        setCount(count-1);
        else
        setCount(0);
    }
  return (
    <>
    <p>count:{count}</p>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={handlerUp}>-</button>
    </>
  )
}

export default Usestate