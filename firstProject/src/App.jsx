import { useState } from "react";

const App=()=>{
  
const [count, setCount]= useState(0);
  const add=()=>{
    setCount(count+1);
  }
  const sub=()=>{
    setCount(count-1);
  }
    return(
      
        <>
            <h1>{count}</h1>
            <button onClick={add}>Add</button>
            
            <button onClick={sub}>Sub</button>
        </>
    )
}
export default App;