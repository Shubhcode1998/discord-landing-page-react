import React from 'react';
import chillin from '../Images/just-chillin.svg';
import { BiDownload } from 'react-icons/bi';
import stars from '../Images/stars.svg';
import './Chillin.css';

function Chillin() {
  return (
    <div className='Chillin'>
        <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        <img src={chillin} alt="chillin"  class="img-fluid"></img>
        <img src={stars} alt="chillin"  class="img-fluid"></img>
        <h2>Ready to start your journey?</h2>
        <button className='btn-windows'> <BiDownload/> Download for Windows</button>
    </div>
  )
}

export default Chillin