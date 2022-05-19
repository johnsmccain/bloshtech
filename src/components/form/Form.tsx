import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './form.scss';

const handleSubmit =(e:any)=>{
  e.preventDefault()
}
const Form = () => {
  return (
    <div className="container" id='contact' onSubmit={handleSubmit}>
        <form className='form'>
            <div className="form-wrapper">
            <label htmlFor="name" className='form-wrapper-label'>Name</label>
            <input type="text" required id="name" name="name" className='form-wrapper-control' placeholder="Your name.."/>
              
            </div>
            <div className="form-wrapper">
            <label htmlFor="email" className='form-wrapper-label'>Email Address</label>
            {/* <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> */}
            <input type="email" required name="email" id="email"  className='form-wrapper-control'/>
              
            </div>
            <div className="form-wrapper">
              
            <label  htmlFor='subject' className='form-wrapper-label'>Tell us about your project</label>
            <textarea id="subject" required name="subject" className='form-wrapper-control' placeholder="Write something.." style={{height:"200px"}}></textarea>
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
  )
}

export default Form