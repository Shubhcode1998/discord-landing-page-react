import React from 'react';
import './Common.css';

function Common(props) {
  return (
    <div class="container-fluid">

    <div class="row">
 
     <div class="col-sm-6">
      
      <div className="left">
      <img src={props.imsrc} alt="bg"  class="img-fluid"></img>
      </div>
      
     </div>
 
     <div class="col-sm-6">
     <div className='right'>
     <h1>{props.heading}</h1>
     <p>{props.para}</p>
     </div>
     </div>
     </div>
     <br></br>
     </div>
  )
}

export default Common