import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <header>
      <nav style={{backgroundColor: 'red'}}>
        <ul style={{ listStyle: "none", display: "flex", fontSize: '25px',  }}>
          <li style={{ marginLeft: '20px' }}>
            <Link style={{textDecoration: 'none'}} to='/SignUp' >Home</Link>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <Link style={{textDecoration: 'none'}} to="/Products">Products</Link>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <Link style={{textDecoration: 'none'}} to="/Aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
};

export default Header;
