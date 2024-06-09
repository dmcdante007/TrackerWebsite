import React from "react";

const Header = () => {
  return (
    <>
    <header>
      <nav style={{backgroundColor: 'red'}}>
        <ul style={{ listStyle: "none", display: "flex", fontSize: '25px',  }}>
          <li style={{ marginLeft: '20px' }}>
            <a style={{textDecoration: 'none'}} href="#">Home</a>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <a style={{textDecoration: 'none'}} href="#">Products</a>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <a style={{textDecoration: 'none'}} href="#">About Us</a>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
};

export default Header;
