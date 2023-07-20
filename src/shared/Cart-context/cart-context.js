import React, { createContext, useState} from 'react';
 export const cartcontext= createContext()
 export const Cartprovider=(props)=>{
    const [cart,setcart]= useState([])
    return(
        <cartcontext.Provider
           value={[cart,setcart]}
        >
         {props.childern}
        </cartcontext.Provider>
    )

}
