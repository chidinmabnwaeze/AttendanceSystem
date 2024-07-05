import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
const [count, setCount] = useState([
    {
        title:"No of Total staff",
        img : ,
        staffCount: 100
    }
])

  return (
    <div className='hero'>
      <Header/> 
      <Sidebar/>

      <div className="card-count">
        <div className="card">
            {count.map((countCard, index)=>{
                <div className="box">
                  <div className="box-title">
                    <p>{countCard.title}</p>
                    </div>  
                    <div className="box-number">
                        <img src={} alt="" />
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