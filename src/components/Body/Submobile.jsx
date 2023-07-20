import React from 'react';
import '../../style.css/mobile.css';
const Submobile = ({item,handleclick}) => {
  const {id,name,image,price}= item;
  return (
    <div className="cards">
    <div className="image-box">
      <img src={image}  alt={name} />
    </div>
    <div className="details">
    <p>{name}</p>
    <p>{price}</p>
    <button onClick={()=>handleclick(item)}>به سبد من اضافه کن</button>
    </div>
    </div>
  )
};
export default Submobile;
