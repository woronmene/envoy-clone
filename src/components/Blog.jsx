import React from 'react'
import "./Blog.scss"
import BlogItem from './BlogItem'
import data from '../data'

function Blog() {
    return (
        <div className="blog">

            <div className="blog-wrapper global-container ">
                <div className="blog-subheading global-lighter-dark">
                    THE ENVOY BLOG
                </div>
                <p className="global-main-text global-dark blog-title">
                Keeping workplaces safe and healthy              </p>

                <div className="featured-blogs">

                  {data.blog.map((item, index)=>{
                      return (
                          <BlogItem key={index} {...item}/>
                      )
                  })}  
                    
                   
               

                </div>
                

            </div>
            
        </div>
    )
}

export default Blog
