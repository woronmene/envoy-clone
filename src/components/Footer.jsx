import React from 'react'
import "./Footer.scss"
import {ImFacebook} from "react-icons/im"
import {IoLogoTwitter} from "react-icons/io"
import {RiLinkedinFill} from "react-icons/ri"

function Footer() {
    return (
        <div className="footer">
            <div className="global-container">
                <div className="footer-top">

            
            <div className="footer-links">
                <p className=" first-link">Products</p>
                <p className="footer-link">Products</p>
                <p className="footer-link">Protect</p>
                <p className="footer-link">Desks</p>
                <p className="footer-link">Visitors</p>
                <p className="footer-link">Rooms beta</p>
                <p className="footer-link">Deliveries</p>
                <p className="footer-link">Mobile</p>
                <p className="footer-link">Integrations</p>
                <p className="footer-link">Partnerships</p>
                <p className="footer-link">Pricing</p>
                <p className="footer-link">Get a quote</p>
            </div>
            <div className="footer-links">
                <p className="first-link">Solutions</p>
                <p className="footer-link">Hybrid work</p>
                <p className="footer-link">Enterprise</p>
                <p className="footer-link">Security</p>
                <p className="footer-link">Space management</p>
                <p className="footer-link">Health and safety</p>
                <p className="footer-link">Workplace experience</p>
                <p className="footer-link">Compliance</p>
                <p className="footer-link">Touchless sign-in</p>
                <p className="footer-link">Access control</p>
                <p className="footer-link">Efficiency</p>
                <p className="footer-link">Experience</p>
            </div>
            <div className="footer-links">
                <p className=" first-link">Resources</p>
                <p className="footer-link">Hybrid work resource hub</p>
                <p className="footer-link">Help center</p>
                <p className="footer-link">Return to Workplace Index</p>
                <p className="footer-link">Envoy Store</p>
                <p className="footer-link">Customer stories</p>
                <p className="footer-link">Demo</p>
                <p className="footer-link">Compliance tips</p>
                <p className="footer-link">Developers</p>
                <p className="footer-link">Glossary</p>
            </div>
            <div className="footer-links">
                <p className="first-link">Company</p>
                <p className="footer-link">About Envoy</p>
                <p className="footer-link">Vision</p>
                <p className="footer-link">Jobs</p>
                <p className="footer-link">Blog</p>
                <p className="footer-link">Data security</p>
                <p className="footer-link">Press</p>
                <p className="footer-link">Partner</p>

            </div>
            
                </div>



            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content global-container">
                    
                        <div className="footer-bottom-left">
                <p className="footer-link">Contact</p>
                <p className="footer-link">Status</p>
                <p className="footer-link">Terms of service</p>
                <p className="footer-link">Privacy Policy</p>
                        </div>

                        <div className="footer-bottom-right">
                            <ImFacebook/>
                            <IoLogoTwitter/>
                            <RiLinkedinFill/>
                        </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Footer
