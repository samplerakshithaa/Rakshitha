import React from 'react'
import Image from './visit.jpg'
export default function 
() {
  return (
    <div style={{display:"flex"}}>
    <div style={{height:"300px",width:"50%",flex:"1"}}>
        <h1>contact page</h1>
        <h2>Email:shoppie890@gmail.com</h2>
        <h4>Contact No:6792560123</h4>
        
        </div>
      <div style={{height:"300px",width:"50%",backgroundImage:`url(${Image})`,backgroundSize:"size"}}></div>


    </div>
  )
}
