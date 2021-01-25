import React from 'react'

const Meme = (props) => {
    return ( 
    <div className="meme">
        <h1>{props.text}</h1>
        <img src={props.image} alt="img"/>
      </div>
     )
}

export default Meme;
