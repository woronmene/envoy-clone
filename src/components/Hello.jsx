import React from 'react'
import "./Hello.scss"

function Hello() {
    return (
        <div className='hello'>
            <div className="hello-content global-container">
                <div className="hello-text">
                    <p className="global-main-text global-blue ">Hello, hot desking</p>
                    <p className="global-desc-text global-blue">Get ready for hybrid work with Envoy Desks—the flexible way to manage spaces and schedules.
</p>
                    <button className="global-btn global-bg-blue" href='#'>Learn more</button>

                </div>

                <div className="hello-image">
                    {/* <img src="https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/phones.svg?alt=media&token=d1290c2b-9dc6-4ec3-838b-8f08469af4ea" alt="phones" /> */}
                </div>
            </div>
        </div>
    )
}

export default Hello
