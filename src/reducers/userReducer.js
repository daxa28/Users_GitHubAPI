const SET_USER = "SET_USER";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_ERROR = "SET_IS_ERROR"

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 30,
  totalCount: 0,
  isError: false
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case SET_IS_ERROR: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    default:
      return state;
  }



}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export const setIsError = (bool) => ({
  type: SET_IS_ERROR,
  payload: bool,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
