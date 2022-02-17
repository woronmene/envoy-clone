import React from 'react'
import "./Try.scss"
import {FaPhoneAlt} from "react-icons/fa"

function Try() {
    return (
        <div className="try">

            <div className=" global-container">

                <div className="try-content">
                <div className="try-content-text">
                <p className="global-main-text global-orange">Try Envoy for free</p>

<p className="global-desc-text global-dark" >Transforming your workplace is easier than you think. Get started in minutes.</p>

                </div>

                <form >
                     <input type="text" placeholder='Enter your email' className="global-email-input "/>
                     <button className="global-btn global-bg-orange" href='#'>Get started</button>
                 </form>
                </div>

               

                
            <div className="contact">
                <hr className="global-horizontal-rule"/>
               <FaPhoneAlt className="phone-icon" size="18"/>
              

                <p className="global-desc-text global-dark contact-text"> Contact our sales team today at <span className="global-orange">(877) 652-2808</span></p>
                <hr className="global-horizontal-rule"/>


            </div>
            </div>



            
        </div>
    )
}

export default Try
