import React from "react";
import Navigation from "../Header/Navigation.jsx";
const Header=({cartitems})=>{
    return(
        <div>
           <Navigation  cartitems={cartitems}  />

        </div>
    )
}
export default Header;