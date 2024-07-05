import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import IntroBar from '../components/IntroBar'
import usersIcon from '../assets/icons/fa_users.svg'

const Dashboard = () => {
const [count, setCount] = useState([
    {
        title:"No of Total staff",
        img : usersIcon,
        staffCount: 100
    }
])

  return (
    <div className='hero'>
      <Header/> 
      <Sidebar/>
      <IntroBar/>

      <div className="card-count">
        <div className="card">
            {count.map((countCard, index)=>{
                <div className="box" key={index}>
                  <div className="box-title">
                    <p>{countCard.title}</p>
                    </div>  
                    <div className="box-number">
                        <img src={countCard.img} alt="" />
                        <p className='number'>{countCard.staffCount}</p>
                    </div>
                </div>
            })}
        </div>
        </div> 
    </div>
  )
}

export default Dashboard