import { SET_HE_THONG_RAP } from "../type/quanLyRapType";

const initialState = {
  heThongRapArr: [],
};

export const quanLyRapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HE_THONG_RAP: {
      state.heThongRapArr = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
