import React from 'react'

const form = () => {
  return (
         <div className="form-border">
        <form action="">
          <div className="name">
            <label className="staff" htmlFor="name">
              Name of staff
              <input type="text" placeholder="Select staff" />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Staff Role
              <input type="text" placeholder="Staff role" />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Purpose of leave
              <input type="text" placeholder="Enter purpose of leave" />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Description
              <textarea
                type="textarea"
                placeholder="Describe your leave"
                textarea name="leaveDescription" id="staff" rows={10} cols={80}
              />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Leave duration
              <input
                type="text"
               
              />
            </label>
          </div>

          <div className="formButtons">
            <button className="cancel">Cancel</button>
            <button className="approve">Approve Leave</button>
          </div>
        </form>
      </div>

  )
}

export default form