import React from 'react';

import aboutImg from '../img/about.png';

function About(){
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImg} alt="about"></img>
      </div>
      <div className="about-text">
        <h1>Learn more about us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laudantium magni? Vel accusantium libero commodi, explicabo ab ullam distinctio nostrum, excepturi sed in quasi veniam!</p>
        <button>Read more</button>        
      </div>
    </div>
  );
}

export default About;