import { ADD_FAVORITE, REMOVE_FAVORITE } from "redux/actions/types";

const initialState = {
  favorites: [],
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default generalReducer;
