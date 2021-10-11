import { React, useState, useEffect } from "react";
import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethod";

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await userRequest.get("users/?new=true");
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      <ul className="widget-sm-list">
        {users.map((user) => (
          <li className="widget-sm-list-item" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt="Loading!!!"
              className="widget-sm-img"
            />
            <div className="widget-sm-user">
              <span className="widget-sm-username">{user.username}</span>
            </div>
            <button className="widget-sm-button">
              <Visibility className="widget-sm-icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
