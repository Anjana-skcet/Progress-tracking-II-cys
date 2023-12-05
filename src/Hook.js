import React ,{useState}from 'react'

const Hook = () => {
    const[count,setCount]=useState(0);
    const handlerUp= ()=>{
        if(count>0)
        return setCount(count-1)
    else
       return setCount(0)
    }
  return (
    <>
    <p>Count:{count}</p>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={handlerUp}>-</button>
    </>
  )
}

export default Hook