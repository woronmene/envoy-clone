import React from 'react'
import "./Hero.scss";
function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <p className="global-main-text global-dark">
                Bring people <br/>together in a flexible workplace
                </p>
                <p className="global-desc-text global-lighter-dark hero-desc">Join the thousands of companies that rely on Envoy to keep hybrid workplaces running smoothly
                 and safely, so everyone inside can thrive.</p>
                 <form >
                     <input type="text" placeholder='Enter your email' className="global-email-input "/>
                     <button className="global-btn global-bg-orange" href='#'>Get started</button>
                 </form>
                 <p className="global-desc-text global-lighter-dark contact-text">Talk to our sales team. <span className="global-orange">Contact Us</span></p>
            </div>
        </div>
    )
}

export default Hero
