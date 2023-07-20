import React from "react";
import {Routes,Route 
       } from "react-router-dom";
import About from "./About";
import Product from "./Product";
import Home from "./Home";
import Order from "./Order";
import Tellus from "./Tellus";
import Contact from "./Contact";
import Mobile from './Mobile';
import Cart from './Cart';
import Login from '../Header/Login';
import Rigester from "../Header/Rigester";
const Body=({handleclick,cartitems,handleRomoveproduct,handlecartclean})=>{
    return(
        <div>
            <Routes>
            <Route path="/"         element={<Home/>}/>
            <Route path="/About"    element={<About/>}/>
            <Route path="/Product"  element={<Product/>}/>
            <Route path="/Order"    element={<Order/>}/>
            <Route path="/Tellus"   element={<Tellus/>}/>
            <Route path="/Contact"   element={<Contact/>}/>
            <Route path="/Mobile"   element={<Mobile handleclick={handleclick}/>}/>
            <Route path="/Cart"   element={<Cart cartitems={cartitems} handleclick={handleclick} handleRomoveproduct={handleRomoveproduct} handlecartclean={handlecartclean}/>}/>
            <Route path="/Login"   element={<Login/>}/>
            <Route path="/Rigester"   element={<Rigester/>}/>
           </Routes>
        </div>
    )
}
export default Body;