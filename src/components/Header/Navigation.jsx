import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../assets/css/main.css';
import '../../style.css/Cart.css';
import '../../../src/App.css';
const Navigation=({cartitems})=>{
    return(
        <div className="navbar-item" >
             <Navbar  expand="lg">
      <Container className="navlink" >
        <Navbar.Brand ><Link to="/" className="navigation"><img  src="poco m3   02.jpg" alt="logo" ></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link> <Link to="/"  className="navigation">خانه</Link></Nav.Link>
            {/*<Nav.Link> <Link to="/Product"  className="navigation">محصولات</Link></Nav.Link>
            <Nav.Link> <Link to="/Order"  className="navigation">سفارشات</Link></Nav.Link>
             <Nav.Link>  <Link to="/About"  className="navigation">درباره ما</Link></Nav.Link>*/}
              <Nav.Link>  <Link to="/Mobile"  className="navigation">محصولات</Link></Nav.Link>
            <Nav.Link>  <Link to="/Contact"  className="navigation">تماس با ما</Link></Nav.Link>
            <Nav.Link><Link to="/Cart" className="cart" >
            <span >
              {cartitems.length === 0 ? "0" : cartitems.length}
            </span>
            <span>
            <i class="fas fa-shopping-cart" />
            </span> 
              </Link></Nav.Link>
              <Nav.Link><Link to="/Login" className="navigation" >
                <span>
                  <i class="fas fa-user-alt"/>
                
                </span>
                 </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
export default Navigation;