import React from 'react'
import "./Textanimation.css"

export default function Textanimation() {
  return (
    <div className='container'>

        <div className='static-text'>I'm a</div>

        <ul className='dynamic-text'>

            <li><span>student</span></li>
            <li><span>fresher</span></li>
            <li><span>engineer</span></li>
            <li><span>powerlifter</span></li>

        </ul>

    </div>
  )
}
