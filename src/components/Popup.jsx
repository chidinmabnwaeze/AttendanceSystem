import React from 'react'
import Profile from '../assets/images/profile.png'
import close from '../assets/icons/close.png'

const Popup = () => {
  return (
    <div className='popup'>
        <div className="exit">
            <img src={close} alt="" />
        </div>
        <div className="user">
            <div className="profilePic">
                <img src={Profile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Popup