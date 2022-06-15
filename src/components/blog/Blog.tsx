import React from 'react'
import "./blog.scss"
import pic from '../../assets/bpic.png'
import pic1 from '../../assets/bpic1.png'
import pic2 from '../../assets/bpic2.png'
import BigText from '../bigTex/BigText'
function Blog() {
  return (
    <div className='blog' id='blog'>
        <div className="blog-container">
            <div className="blog-container-header">
                <BigText title='Blog post' text='Things we have built' color='black'/>
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