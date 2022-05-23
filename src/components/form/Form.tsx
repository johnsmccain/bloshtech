import React, { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './form.scss';


const Form = () => {
const [name, setName]:any = useState()
const [email, setEmail]:any = useState()
const [msg, setMsg]:any = useState()
const handleSubmit =(e:any)=>{
  e.preventDefault()
  console.log(name, email, msg)
}
  return (
    <div className="wrapper" id='contact' >
      <div className="container">
        <div className="info">
          <h2 className="info-title">
            <span>“ Be Inspired by
            what you see” <br />  </span> Let’s Talk about 
            your project
          </h2>
          <p className="info-text">Contact us for consulting for you products.</p>
          <div className="info-icons">
            <FaFacebook  className='info-icons-icon'/>
            <FaInstagram className='info-icons-icon'/>
          </div>
        </div>
        <form className='form'onSubmit={handleSubmit}>
            <div className="form-wrapper">
            <label htmlFor="name" className='form-wrapper-label'>Name</label>
            <input type="text" onChange={(e)=> setName(e.target.value)} required id="name" name="name" className='form-wrapper-control' placeholder="Your name.."/>
              
            </div>
            <div className="form-wrapper">
            <label htmlFor="email" className='form-wrapper-label'>Email Address</label>
            {/* <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> */}
            <input type="email" onChange={(e)=> setEmail(e.target.value)} required name="email" id="email"  className='form-wrapper-control'/>
              
            </div>
            <div className="form-wrapper">
              
            <label  htmlFor='subject' className='form-wrapper-label'>Tell us about your project</label>
            <textarea id="subject" onChange={(e)=> setMsg(e.target.value)} required name="subject" className='form-wrapper-control' placeholder="Write something.." style={{height:"200px"}}></textarea>
            </div>


            {/* <label htmlFor="country">Country</label>
            <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select> */}

            <div className="form-wrapper">

            <button type="submit" value="Submit" className='form-wrapper-btn'>submit <HiOutlineArrowNarrowRight className='form-wrapper-btn-icon'/></button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Form