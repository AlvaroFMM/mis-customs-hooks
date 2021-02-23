import React, { useState } from 'react'
    
export const useForm = (initialState={}) => {


    const [value, setvalue] = useState(initialState)
    const cleanInput=()=>{
        setvalue(initialState);
    }
    const handleInputChange= ({target})=>{
        setvalue({
            ...value, // va aser igual a arreglo anterior
            [target.name]:target.value // + el nue vo valor que añadas por target.name

        })
    }
    return [value,handleInputChange,cleanInput]
}
