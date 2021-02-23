import { useState } from "react"


const useHooks = (initialState=1) => {
    
  const [state, setstate] = useState(initialState)

 const increment= () =>{
     setstate(state +1 )
 }
 
 const decrement= () =>{
    setstate(state -1 )
}
 const reset=()=>{
     setstate(initialState)
 }

//{} ARREGLO
//[] OBJETO
return {
    
    state,
    increment,
    decrement,
    reset

};

}

export default useHooks