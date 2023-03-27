import React from 'react';
import './Common_left.css';

function Common_left(props) {
  return (
    
<div className='cleft'>
<div class="container-fluid">

<div class="row">

 <div class="col-sm-6">
  
  <div className="commonleft">
  <h1>{props.heading}</h1>
  <p>{props.para}</p>

  </div>
  
 </div>

 <div class="col-sm-6">
 <div className='commonright'>
 <img src={props.imsrc} alt="bg" class="img-fluid"></img>
 </div>
 </div>
 </div>
 </div>
 <br></br>
 </div>


  )
}

export default Common_left