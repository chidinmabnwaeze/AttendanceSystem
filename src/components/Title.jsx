import React from 'react'

const Title = () => {
  return (
    <div className='Title'>  
       <div className='titleHead'> <h1>Timesheet</h1> </div>

<div className="statusHead">
    <div className="status">
        <p className='clockIn'>Clocked in</p>
        <p className='clockLate'>Clocked late</p>
        <p className='offToday'>Off Today</p>
        </div>

        <div className="right">
           <button className='filterButton'>
            <img className='filter' src={""} alt="" />
            </button> 
            <input 
            type="searchbox" 
            placeholder='Card ID, Role or Staff name'/>
        </div>
<hr />
</div>

<table>
    <tr>
        <th>Staff Name</th>
        <th>Card ID </th>
        <th>Email Address </th>
        <th>Role</th>
        <th>Status </th>
        <th>Date </th>
    </tr>
</table>
    </div>
  )
}

export default Title