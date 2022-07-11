import { END_LOADING, START_LOADING } from "../type/loadingType";

const initialState = {
  isLoading: false,
  count: 0,
};

export const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING: {
      state.count++;
      state.isLoading = true;
      return { ...state };
    }
    case END_LOADING: {
      state.count--;
      if (state.count === 0) {
        state.isLoading = false;
      }
      return { ...state };
    }

    default:
      return { ...state };
  }
};
