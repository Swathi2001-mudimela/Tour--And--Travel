import React from 'react'
import './Tripstyles.css'

export default function Tripdata(props) {
  return (
    <div className="t-card">
        <div className="t-image">
            <img src={props.image1} alt="frd"/>
           
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>

    </div>
  )
}
