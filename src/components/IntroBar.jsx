import React from 'react'
import avatar from '../assets/images/avatar.png'

const IntroBar = () => {
  return (
    <div className='introBar'>
      <div className="admin">
       <img className='anime' src={avatar} alt="" /> 
       <p>Welcome Sarah</p>
       </div>
    </div>
  )
}

export default IntroBar