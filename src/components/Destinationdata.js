import React from 'react'
import './Destinatio.css'


export default function Destinationdata(props) {
  return (
    <div className={props.className}>
            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p> {props.text}</p>
            </div>
            <div className='image'>
                <img alt='frd'src={props.image1}/>
                <img alt='frg' src={props.image2}/>
            </div>
        </div>
  )
}
