import axios from "axios";
import { setIsFetching, setUser } from "../../reducers/userReducer";

export const getUser = (
  searchQuery = "repos:%3E42",
  order,
  currentPage,
  perPage
) => {
  return async (dispatch) => {
    if (searchQuery === "") {
      searchQuery = "repos:%3E42";
    }
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}&sort=repositories&order=${order}&per_page=${perPage}&page=${currentPage}`
    );
    dispatch(setUser(response.data));
  };
};

export const getCurrentUser = async (username, setUser) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  setUser(response.data);
};
