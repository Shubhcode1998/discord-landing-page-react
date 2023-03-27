import React from 'react'
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
import './AppFooter.css';
import Nav from 'react-bootstrap/Nav';

function AppFooter() {
  return (
    <div className='AppFooter'>


        <div className='footer-content'>

        <h2> IMAGINE A <br></br>PLACE</h2>
        <p><img src="https://img.icons8.com/fluency/16/null/usa-circular.png" alt='us'/> English, Usa</p>
        {/* <p className='foot-icons'> 
        <Link to='/'><BsTwitter /></Link> <Link to='/'><BsInstagram /></Link> <Link to='/'><BsFacebook /></Link><Link to='/'><BsYoutube /> </Link>
        </p> */}

        <div className='foot-icons'>
        <Nav.Link to="/"> <BsTwitter/> </Nav.Link>
        <Nav.Link to="/"> <BsInstagram/> </Nav.Link>
        <Nav.Link to="/"> <BsFacebook/> </Nav.Link>
        <Nav.Link to="/"> <BsYoutube/> </Nav.Link>
        </div>

        </div>

      <div className='footer-list'>

        <div class="footList">
                <ul> 
                    <li class="heading-li">Product</li>
                    <li> <Nav.Link to="/">Download </Nav.Link></li>
                    <li> <Nav.Link to="/">Nitro </Nav.Link></li> 
                    <li> <Nav.Link to="/">Status </Nav.Link></li>
                </ul>
            </div>

            <div class="footList">
                <ul> 
                    <li class="heading-li">Company</li>
                    <li> <Nav.Link to="/">About </Nav.Link></li>
                    <li> <Nav.Link to="/">Job </Nav.Link></li> 
                    <li> <Nav.Link to="/">Branding </Nav.Link></li>
                    <li> <Nav.Link to="/">Newsroom </Nav.Link></li>
                </ul>
            </div>

            <div class="footList">
                <ul> 
                    <li class="heading-li">Resources</li>
                    <li> <Nav.Link to="/">College </Nav.Link></li>
                    <li> <Nav.Link to="/">Support </Nav.Link></li> 
                    <li> <Nav.Link to="/">Safety </Nav.Link></li>
                    <li> <Nav.Link to="/">Blog </Nav.Link></li>
                    <li> <Nav.Link to="/">Feedback </Nav.Link></li>
                    <li> <Nav.Link to="/">Build </Nav.Link></li> 
                    <li> <Nav.Link to="/">StreamKit </Nav.Link></li>
                    <li> <Nav.Link to="/">Creators </Nav.Link></li>        
                    <li> <Nav.Link to="/">Community </Nav.Link></li>             
                </ul>
            </div>

            <div class="footList">
                <ul> 
                    <li class="heading-li">Policies</li>
                    <li> <Nav.Link to="/">Terms </Nav.Link></li>
                    <li> <Nav.Link to="/">Privacy </Nav.Link></li> 
                    <li> <Nav.Link to="/">Cookies </Nav.Link></li>
                    <li> <Nav.Link to="/">Guidelines </Nav.Link></li>
                    <li> <Nav.Link to="/">Setting</Nav.Link></li>
                    <li> <Nav.Link to="/">Licenses </Nav.Link></li>
                    <li> <Nav.Link to="/">Moderation </Nav.Link></li>
                </ul>
            </div>            
        </div> 
        


    </div>
  )
}

export default AppFooter