import React, { useState } from 'react'

const Scard = (props:any) => {
    const [troncate, settroncate] = useState(170)
     
  return (
     
 ​    ​<​div​ ​style​=​{​{​height​: ​'300px'​​}​}​>
          <img src={props.profile}  alt='person'/>
          <div className="myCarousel">
            <h3>{props.name}</h3>
            <h4>{props.proffesion}</h4>
            <p>
            {`${props.desc.slice(0, troncate )}${troncate === 150 ? '...' : ''}`}
            </p>
          </div>
        </div>
  )
}

export default Scard
