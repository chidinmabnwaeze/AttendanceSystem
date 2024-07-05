import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
const [count, setCount] = useState([
    {
        
    }
])

  return (
    <div className='hero'>
      <Header/> 
      <Sidebar/>

      <div className="card-count">
        <div className="card">
            {}
        </div>
        </div> 
    </div>
  )
}

export default Dashboard