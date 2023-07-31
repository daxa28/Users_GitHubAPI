import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentUser } from "../actions/user";
import "./card.css";
import leftarrow from "../../img/left_arrow_icon.png";

function Card() {
  const { username } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser(username, setUser);
  }, [username]);

  return (
    <Fragment>
      <button className="btn" onClick={() => navigate(-1)}>
        <img src={leftarrow} alt="leftarrow-icon" />
      </button>

      <div className="hr" />
      <div className="card">
        <div className="contant">
          <div className="avatar">
            <img src={user.avatar_url} alt="" />
          </div>

          <div className="info">
            <h3>{user.login}</h3>
            <h5>id: {user.id}</h5>
            <h6>Количество публичных репозиториев: {user.public_repos}</h6>
            <h6>Подписчики: {user.followers}</h6>
            <h6>Подписки: {user.following}</h6>
          </div>
        </div>

        <a href={user.html_url}>Посмотреть страницу на Git Hub</a>
      </div>
    </Fragment>
  );
}

export default Card;
