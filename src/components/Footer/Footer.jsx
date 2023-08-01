import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
const Footer=()=>{
    return(
    <div className="footer">
       <ul className="ulfooter ">
           <Link className="text-decoration-none" to="/" > <li>صفحه اصلی</li></Link>
           <Link className="text-decoration-none" to="/Order"> <li >سفارشات  </li></Link>
            <Link className="text-decoration-none" to="/Mobile"><li>محصولات</li></Link>
            <Link className="text-decoration-none" to="/Contact"><li>تماس با ما </li></Link>
            </ul>
        <p className="pfooter">تمامی حقوق مادی و معنوی این سایت نزد نوین سایت محفوظ است</p>
    
    </div>
    )
}
export default Footer;