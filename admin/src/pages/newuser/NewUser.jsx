import React from "react";
import "./newuser.css";

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input type="text" placeholder="Jacky" />
        </div>
        <div className="new-user-item">
          <label>Full Name</label>
          <input type="text" placeholder="Jacky Snowy" />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input type="email" placeholder="Jackysnowy@gmail.com" />
        </div>
        <div className="new-user-item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="new-user-item">
          <label>Phone</label>
          <input type="text" placeholder="+977 9844440077" />
        </div>
        <div className="new-user-item">
          <label>Address</label>
          <input type="text" placeholder="Kathmandu | Nepal" />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="others" value="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
