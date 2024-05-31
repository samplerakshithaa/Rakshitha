import React from 'react';
import Image from './shop.jpg'

function Home() {
  return (
    <div>
    <div style={{display:"flex"}}>
      <div style={{height:"300px",width:"50%",flex:"1"}}> 
      <h1>  Welcome to our Store</h1>
      <h3>Discover the best produtcs at unbeatable prices</h3></div>
      <div style={{height:"300px",width:"50%",backgroundImage:`url(${Image})`,backgroundSize:"size"}}></div>

     
     
    </div>
    </div>
  );
}

export default Home;