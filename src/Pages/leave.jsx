import React from 'react'
import Title from '../components/Title'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const leave = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Title/>

        <form action="">
            <div className="name">
            <label htmlFor="name"> Name of staff
<input type="text" placeholder='Select staff'/>
            </label>
            </div>
        </form>
    </div>
  )
}

export default leave