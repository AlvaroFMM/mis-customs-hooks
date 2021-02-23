import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
  
  const isMounted = useRef(true)
  console.log("que pasa",isMounted)
  const [state, setstate] = useState({
 
        data: null,
        loading:true, //NO HAY DATA
        error: null
  });

  useEffect(() => {
    
    return () => {
     isMounted.current = false

    }
  }, [])
  useEffect(() => {

    setstate({data:null,loading:true,error:null})
      fetch(url)
      .then( resp=> resp.json() )
      .then( data=> {
       
          if(isMounted.current){ //si el componente esta montado traeme toda la logica si no me traes el cosole
            setstate({
              loading:false, // HAY DATA
              error:null,
              data:data
          })
          }else{
            console.log("no se llamo nada")
          }
       
      
      })
  }, [url])
  return state;
}
