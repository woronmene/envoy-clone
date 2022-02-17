import React from 'react'
import "./Navbar.scss"
import data from '../data'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-wrapper">

            {/* navbar left */}
            <p className='logo'>Envoy</p>

            {/* navbar center */}

            <ul class="center-nav">
                {data.sublinks.map((link, index)=>{
                    return (
                        <li key={index} className={`nav-items ${index === 0 ? 'first-item': ''}`}><p>{link.page}</p></li>

                    )
                })}
      
      </ul>
      {/* navbar right */}

      <ul class="right-nav">
        <li className='nav-items'><p>Log in</p></li>
        <li className='nav-items '><p className="global-btn global-bg-orange">Get started</p></li>
      
      </ul>

      {/* hamburger button */}

      <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
      </div>



            </div>
            
        </div>
    )
}

export default Navbar
