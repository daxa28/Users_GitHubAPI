import axios from "axios";
import { setIsError, setIsFetching, setUser } from "../../reducers/userReducer";

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
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}&sort=repositories&order=${order}&per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setIsError(false))

      dispatch(setUser(response.data));
    } catch (e) {
      dispatch(setIsFetching(false))
      dispatch(setIsError(true))

    }
  };
};

export const getCurrentUser = async (username, setUser) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  setUser(response.data);
};
