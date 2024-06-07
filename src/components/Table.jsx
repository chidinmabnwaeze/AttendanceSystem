import React from 'react'

const Table = () => {
  return (
    <div>
         <table>
        <tr>
          <th>Staff Name</th>
          <th>Card ID </th>
          <th>Email Address </th>
          <th>Role</th>
          <th>Status </th>
          <th>Date </th>
        </tr>

        <tr>
            <td>
                <img className='userpic' src="" alt="" />
                Julius Gabriel
            </td>
            <td>23476</td>
            <td>example@gmail.com</td>
            <td>Frontend developer</td>
            <td>Clocked in</td>
            <td>2024</td>
        </tr>
      </table>
    </div>
  )
}

export default Table