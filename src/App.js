import React,{useState} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Maincomponent from './components/Maincomponent';
import Login from './components/Header/Login';
import Rigester from './components/Header/Rigester';
function App() {
  document.title="فروشگاه گوشی و لوازم جانبی ";
  const [cartitems,setcartitems]= useState([]);
  const handleclick=(product)=>{
    // check if the product is already in the cart
   const existproduct= cartitems.find((item) => item.id === product.id );
  if (existproduct) {
    // If the product is already in the cart, update its quantity
    setcartitems(
      cartitems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    setcartitems([...cartitems, { ...product, quantity: 1 }]);
  }
};
const handleRomoveproduct=(product)=>{
  // check if the product is already in the cart
  const existproduct= cartitems.find((item) => item.id === product.id );
  //if quantity of cartitems === 1
  if(existproduct.quantity === 1 ){
        setcartitems(cartitems.filter((item)=> item.id !== product.id));
  }else{
    setcartitems(
      cartitems.map((item)=>
       item.id=== product.id ? {...existproduct, quantity: existproduct.quantity-1}
       :item
       )
    );
  }
}
const handlecartclean=()=>{
  setcartitems([]);
}
  return (
    <div className="App">
      <BrowserRouter>
     <Maincomponent handleclick={handleclick} cartitems={cartitems} handleRomoveproduct={handleRomoveproduct}  handlecartclean={handlecartclean}/>
     </BrowserRouter>
    </div>
  )
}

export default App