import React from 'react';
import Feature from './Feature';
import fimg1 from '../img/1.svg';
import fimg2 from '../img/2.svg';
import fimg3 from '../img/3.svg';
import fimg4 from '../img/4.svg';

function Features(){
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="feature-blocks">
        <Feature img={fimg1} title="WeightLifting" />
        <Feature img={fimg2} title="Specific Muscle" />
        <Feature img={fimg3} title="Flex Your Muscle" />
        <Feature img={fimg4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Features;