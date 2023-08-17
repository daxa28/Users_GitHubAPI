import React, { Fragment, useEffect, useState } from "react";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/user";
import User from "./user/User";
import { setCurrentPage } from "../../reducers/userReducer";
import { createPages } from "../../utils/pagesCreator";
import git_icon from "../../img/git-icon1.png";
import uparrow from "../../img/up_arrow_icon.png";
import downarrow from "../../img/down_arrow_icon.png";
import Search from "./search/Search";
import CountDown from "../CountDown";

function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [isSort, setIsSort] = useState(true);
  const [order, setOrder] = useState("desc");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.items);
  const isFetching = useSelector((state) => state.user.isFetching);
  const isError = useSelector((state) => state.user.isError);
  const currentPage = useSelector((state) => state.user.currentPage);
  const perPage = useSelector((state) => state.user.perPage);
  const totalCount = useSelector((state) => state.user.totalCount);

  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getUser(searchValue, order, currentPage, perPage));
  }, [currentPage, order]);

  function searchHendler() {
    dispatch(setCurrentPage(1));
    // dispatch(getUser(searchValue, order, currentPage, perPage));
  }

  function orderHendler(order) {
    dispatch(setCurrentPage(1));
    setOrder(order);
    setIsSort(() => !isSort);
  }

  return (
    <div className="main">
      <div className="header">
        <img src={git_icon} alt="git-icon" />
        <h2>Пользователи GitHub</h2>
      </div>
      <div className="hr"></div>
      {isError ? (
        <div>
          <CountDown hours={0} minutes={1} />
        </div>
      ) : (
        <Fragment>
          <div className="panel">
            {isSort ? (
              <button className="btn" onClick={() => orderHendler("asc")}>
                <img src={downarrow} alt="downarrow-icon" />
              </button>
            ) : (
              <button className="btn" onClick={() => orderHendler("desc")}>
                <img src={uparrow} alt="uparrow-icon" />
              </button>
            )}
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchHendler={searchHendler}
            />
          </div>

          {isFetching ? (
            <div className="loader">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <Fragment>
              {users.length === 0 ? (
                <div>
                  <h3>Пользователи не найдены</h3>
                </div>
              ) : (
                <Fragment>
                  <div className="block_users">
                    {users.map((user) => (
                      <User user={user} key={user.login} />
                    ))}
                  </div>
                  <div className="pages">
                    {currentPage > 5 ? (
                      <span style={{ margin: "0 5px", cursor: "default" }}>
                        ...
                      </span>
                    ) : (
                      <Fragment></Fragment>
                    )}
                    {pages.map((page, index) => (
                      <span
                        key={index}
                        className={
                          currentPage === page ? "current-page" : "page"
                        }
                        onClick={() => dispatch(setCurrentPage(page))}
                      >
                        {page}
                      </span>
                    ))}
                    {pages.length < 10 ? (
                      <Fragment></Fragment>
                    ) : (
                      <span style={{ margin: "0 5px", cursor: "default" }}>
                        ...
                      </span>
                    )}
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Main;
