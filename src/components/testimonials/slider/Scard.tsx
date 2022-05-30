import React, { useState } from 'react'

const Scard = (props:any) => {
    const [troncate, settroncate] = useState(150)
     
  return (
    <div style={{height: `${troncate > 150 ? '80vh': '286px'   }`}}>
          <img src={props.profile} />
          <div className="myCarousel">
            <h3>{props.name}</h3>
            <h4>{props.proffesion}</h4>
            <p onClick={()=> settroncate(props.desc.length == troncate ? 150 : props.desc.length)}>
            {`${props.desc.slice(0, troncate )}${troncate == 150 &&'...'}`}
            </p>
          </div>
        </div>
  )
}

export default Scard