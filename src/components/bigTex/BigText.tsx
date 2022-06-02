import React from 'react'
import './bigTex.scss'
const BigText = (props:any) => {
  return (
    <div className={props?.color}>
        <h2 className="big_text-title"><span></span> {props?.title}</h2>
        <p className="big_text-text">{props?.text}</p>
    </div>
  )
}

export default BigText