import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'
import StaffSchedule from '../components/staffSchedule'
import Tablist from '../components/Tablist'

const Payroll = () => {
    const text = "Payroll"
    const sub = "Payroll"
    const sub1 = "Staff Schedule"
    const content2 =  <StaffSchedule/>
  return (
    <div>
      <Header/>  
      <Sidebar/>
      <Title
      text={text}
      sub={sub}
      sub1={sub1}
      content2={content2}
      />

     

    </div>
  )
}

export default Payroll