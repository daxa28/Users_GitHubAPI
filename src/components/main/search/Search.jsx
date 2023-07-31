import React from "react";
import searchimg from "../../../img/search1.png";
import classes from "./search.module.css";

function Search(props) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      props.searchHendler();
    }
  }

  return (
    <div className={classes.search}>
      <input
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        type="text"
        onKeyDown={handleKeyDown}
        className={classes.search_input}
        placeholder="Введите логин пользователя..."
        required
      />
      <button onClick={() => props.searchHendler()} className="btn">
        <img src={searchimg} alt="searchimg-icon" />
      </button>
    </div>
  );
}

export default Search;
