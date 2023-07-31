import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";

function User(props) {
  const user = props.user;

  return (
    <div className="user">
      <NavLink style={{ textDecoration: "none" }} to={`/card/${user.login}`}>
        <img src={user.avatar_url} alt="avatar" />
        <h4 className="user-login">{user.login}</h4>
      </NavLink>
    </div>
  );
}

export default User;
