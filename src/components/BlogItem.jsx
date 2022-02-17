import React from 'react'
import "./BlogItem.scss"

function BlogItem({image, title, description}) {
    return (
        <div className="blogItem">
        <img src={image} alt="" />

        <p className="global-sub-text blogItem-title">
            {title}
            </p> 

        <p className="global-desc-text-2 global-lighter-dark">
            {description}
        </p>


    </div>
    )
}

export default BlogItem
