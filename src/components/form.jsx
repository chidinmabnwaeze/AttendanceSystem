import React, { useState } from "react";

const LeaveForm = ({ onSubmit }) => {
  const [leaveForm, setLeaveForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm((prevState) => ({ ...prevState, [name]: value }));
    console.log(value);
    console.log(leaveForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(leaveForm);
    localStorage.setItem("leaveForm", JSON.stringify(leaveForm));
    alert("leave approved successfully");
    console.log(leaveForm);
  };
  return (
    <div className="form-border">
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label className="staff" htmlFor="name">
            Name of staff
            <input
              type="text"
              name="name"
              placeholder="Staff name"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="staff">
            Staff Role
            <input
              type="text"
              name="role"
              placeholder="Staff role"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="purpose">
            Purpose of leave
            <select
              name="purpose"
              className="select"
              // style={{ width: "500%", height: "50px" }}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="sick">Sick</option>
              <option value="annual">Annual</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="description">
            Description
            <textarea
              type="textarea"
              placeholder="Describe your leave"
              textarea
              name="description"
              id="staff"
              rows={10}
              cols={80}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="leave">
            Leave duration
            <div className="duration-input">
              <span>
                From
                <input type="date" name="start" onChange={handleChange} />
              </span>
              <span>
                To
                <input type="date" name="end" onChange={handleChange} />
              </span>
            </div>
          </label>
        </div>

        <div className="formButtons">
          <button className="cancel">Cancel</button>
          <button className="approve" type="submit">
            Approve Leave
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
