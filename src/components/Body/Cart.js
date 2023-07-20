import React from 'react';
import '../../style.css/Cart.css';
const Cart =({cartitems,handleclick,handleRomoveproduct,handlecartclean})=>{
 // Calculate the total price of the cart items
 const totalPrice = cartitems.reduce((price, item) =>
    price + item.quantity * item.price,
    0
 );
 document.title="سبد خرید";
return (
<div className='cart-items'>
 <div className='cart-items-header'>سبد خرید</div>
 <button className='cartclean' onClick={handlecartclean}>cart clean</button>
 {cartitems.Length === 0 &&(
    <div className='cart-items-Empty'> هنوز هیچ محصولی به سبد خرید اضافه نکرده اید!</div>
 )}
 <ul className='cart-items-list'>
   {cartitems.map((item) => (
     <li key={item.id}>
       {item.name} = {item.quantity} * {item.price} 
       <img src={item.image} alt={item.name}/>
       <div className='function'>
    <button className='addproduct' onClick={()=> handleclick(item)}>
      +
      </button>
    <button className='removeproduct' onClick={()=> handleRomoveproduct(item)}>-</button>
   </div>
     </li>
   ))}
 </ul>
 <div className='cart-price-name'>
  قیمت کل
 <span><p>{totalPrice}</p></span></div>
</div>
);
   }
export default Cart
