import React from 'react';
import Image from './shopping.jpeg'
function About() {
  return (
    <div style={{display:"flex"}}>
      <div style={{height:"300px",width:"50%",flex:"1"}}>
      <h1>About Page</h1>
      <p>Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them. A typology of shopper types has been developed by scholars which identifies one group of shoppers as recreational shoppers,[1] that is, those who enjoy shopping and view it as a leisure activity</p>
      </div>
      <div style={{height:"300px",width:"50%",backgroundImage:`url(${Image})`,backgroundSize:"size"}}></div>

    </div>
  );
}

export default About;