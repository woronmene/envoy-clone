import React from 'react'
import "./Lionsgate.scss"
import {FaPlay} from "react-icons/fa"
function Lionsgate() {
    return (
        <div className="lionsgate">
            <div className="overlay"></div>

            <p className="global-main-text  lionsgate-text">
                How Lionsgate is setting up their flexible workplace with Envoy Desks
                </p>

                <p className="play-btn">
                    <FaPlay fill='white' size={30}/>
                </p>
            
        </div>
    )
}

export default Lionsgate
