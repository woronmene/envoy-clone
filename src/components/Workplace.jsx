import React from 'react'
import "./Workplace.scss"
import data from '../data'

function Workplace() {
    return (
        <div className='workplace'>

            <div className="workplace-wrapper">


                {
                    data.workplace.map((feature, index)=>{
                        return(
                            <div className="workplace-feature" key={index}>
                            <div className="title">
                                <img src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/red-icon.svg?alt=media&token=0819aeef-1e1e-4874-8940-e00a120afd4a" alt="" />
                                <p className="global-sub-text">{feature.title}</p>
                                {feature.beta && <p className="beta"> BETA</p>}
                            </div>
                            <p className="global-desc-text-2 global-dark">
                           {feature.description}
                            </p>
                            <div className="learn-more global-desc-text-2 global-orange">
                                Learn more <span className="global-lighter-dark">|</span> Watch the video
                            </div>
                        </div>
                        )
                    })
                }
                <p className="global-main-text global-dark workplace-main-text">
                Envoy's workplace platform
                </p>
           
            
          
         
            </div>
       
        </div>
    )
}

export default Workplace
