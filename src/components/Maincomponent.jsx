import React from "react";
import Body from '../components/Body/Body.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
const Maincomponent=({handleclick,cartitems,handleRomoveproduct,handlecartclean})=>{
    return(
        <div>
       <Header cartitems={cartitems}   />
       <Body handleclick={handleclick} cartitems={cartitems}  handleRomoveproduct={handleRomoveproduct} handlecartclean={handlecartclean} />
       <Footer />
       
        </div>
    )
}
export default Maincomponent;