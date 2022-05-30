import React from 'react'
import "./blog.scss"
import pic from '../../assets/bpic.png'
import pic1 from '../../assets/bpic1.png'
import pic2 from '../../assets/bpic2.png'
function Blog() {
  return (
    <div className='blog' id='blog'>
        <div className="blog-container">
            <div className="blog-container-header">
                <h2 className="blog-container-header-title"><span></span> Blog post</h2>
                <p className="blog-container-header-text">Things we have build</p>
            </div>
            <div className="blog-container-cards">
                {[pic2,pic,pic1].map((blog, index)=> (
                    <div className="blog-container-cards-card" key={index}>
                        <img src={blog} alt="blog" style={{width: '100%'}} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog