import React from 'react';

function Header(){
  return (
    <header id="main">
      <div className="header-content">
        <p>Step up your</p>
        <h1><span>Fitness</span> with us</h1>
        <p className="details">
          Build your body and fitness with professional touch
        </p>
        <div className="header-btn">
          <a href="#join">Join us</a>
        </div>
      </div>
    </header>
  );
}

export default Header;