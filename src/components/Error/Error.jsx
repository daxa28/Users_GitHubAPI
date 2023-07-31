import React from "react";
import { useNavigate } from "react-router-dom";
import leftarrow from "../../img/left_arrow_icon.png";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        <img src={leftarrow} alt="leftarrow-icon" />
      </button>
      <div className="hr" />
      <h4> Вы перешли на несуществующую страницу.</h4>
    </div>
  );
}

export default Error;
