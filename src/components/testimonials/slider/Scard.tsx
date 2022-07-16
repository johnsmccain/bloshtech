import React, { useState } from 'react'

const Scard = (props:any) => {
    const [troncate, settroncate] = useState(170)
     
  return (
    <div style={{height: `${troncate > 200 ? '80vh': '300px'   }`}}>
          <img src={props.profile}  alt='person'/>
          <div className="myCarousel">
            <h3>{props.name}</h3>
            <h4>{props.proffesion}</h4>
            <p 
              // onClick={()=> settroncate(props.desc.length === troncate ? 200 : props.desc.length)}
            >
            {`${props.desc.slice(0, troncate )}${troncate === 200 ?'...': ''}`}
            </p>
          </div>
        </div>
  )
}

export default Scard
