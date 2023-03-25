import React from 'react';
import './Common.css';
import imgfirst from '../Images/img-first.svg';

function Common(props) {
  return (
    // <div className='Common'>
    //     {/* <div className='left'> */}
    //     <img src={imgfirst} alt="imgfirst" width="100%" height="auto"/>
    //     {/* </div> */}

    //     <div className='right'>
    //     <h1>Create an invite-only place where you belong</h1>
    //     <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
    //     </div>

    // </div>

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
     </div>
  )
}

export default Common