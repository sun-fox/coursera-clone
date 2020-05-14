import React from 'react'

import '../css/style.css';
import {Link} from 'react-router-dom'
import logo from '../images/download.svg';
function Sidebar() {
    return (
        <div class="mobile-nav active animated slideInLeft">
        <div class ="sidebar">
        <div class ="brand-img">
          <Link to="/"><img src ={logo} alt=""/></Link>
      </div>
      <div class ="side-item"><Link to="/"><p>Explore</p></Link></div><hr/>
      <div class ="side-item"><Link to="/"><p>For Enterprise</p></Link></div><hr/>
      <div class ="side-item"> <Link to="/login"><p>Log in</p></Link></div><hr/>
      <div class ="side-item"><Link to="/signup"><p>Signup</p></Link></div><hr/>
      <div class ="side-item"><Link to="/"><button id="joinbtn" style ={{width:"200px"}}>Join for Free</button></Link></div>
        </div>
    </div>
    )
}

export default Sidebar
