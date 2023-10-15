import React, {useState} from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-scroll';

function Navbar(){
  const [nav, setnav] = useState(false);
  const changeBackground = ()=>{
    window.scrollY >= 50 ? setnav(true) : setnav(false);
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#">Header</Link>
        </li>
        <li>
          <Link to="#">Features</Link>
        </li>
        <li>
          <Link to="#">Offer</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;