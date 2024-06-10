import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'

const Payroll = () => {
    const text = "Payroll"
    const sub = "Payroll"
    const sub1 = "Staff Schedule"
  return (
    <div>
      <Header/>  
      <Sidebar/>
      <Title
      text={text}
      sub={sub}
      sub1={sub1}
      />

    </div>
  )
}

export default Payroll