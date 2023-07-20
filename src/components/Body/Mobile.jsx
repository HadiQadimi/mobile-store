import {React} from 'react';
import products from '../../data/data.js';
import Submobile from './Submobile.jsx';
import '../../style.css/mobile.css';
const Mobile = ({handleclick}) => {
  document.title="لیست محصولات";
    return(
    <section>
     {
     products.map((items)=>(
        <Submobile key={items.id} item={items}  handleclick={handleclick}/>
       
     ))};
    </section>
    
  );
};

export default Mobile;
