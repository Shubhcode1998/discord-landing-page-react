import React from 'react'
import './Hero.css'
import { BiDownload } from 'react-icons/bi';

function Hero() {

  return (

    <div className='Hero-Section'>

        <div className='content'>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        
        <div className='btn-hero'>
            <button className='windows'> <BiDownload/> Download for Windows</button>
            <button className='browser'>Open Discord in your browser</button>
        </div>
        </div>
    </div>
  )
}

export default Hero