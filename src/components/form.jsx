import React, { useState } from "react";

const form = () => {
  const [leaveForm, setLeaveForm] = useState({
    name: "",
    role: "",
    purpose: "",
    description: "",
    start: "",
    end: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    localStorage.setItem("leaveForm", value);
    setLeaveForm(value);
    alert("leave approved successfully");
  };
  return (
    <div className="form-border">
      <form>
        <div className="name">
          <label className="staff" htmlFor="name">
            Name of staff
            <input type="text" placeholder="Select staff" />
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="astaff">
            Staff Role
            <input
              type="text"
              placeholder="Staff role"
              value={leaveForm.name}
            />
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="purpose">
            Purpose of leave
            <select
              name="leave-purpose"
              id=""
              style={{ width: "500%", height: "50px" }}
            >
              <option value=""></option>
              <option value="leave">Sick</option>
              <option value="leave">Annual</option>
              <option value="">Other</option>
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
              name="leaveDescription"
              id="staff"
              rows={10}
              cols={80}
            />
          </label>
        </div>

        <div className="name">
          <label className="staff" htmlFor="leave">
            Leave duration
            <div className="duration-input">
              <span>
                From
                <input type="date" value={leaveForm.start} />
              </span>
              <span>
                To
                <input type="date" value={leaveForm} />
              </span>
            </div>
          </label>
        </div>

        <div className="formButtons">
          <button className="cancel">Cancel</button>
          <button className="approve" onClick={handleSubmit}>
            Approve Leave
          </button>
        </div>
      </form>
    </div>
  );
};

export default form;
