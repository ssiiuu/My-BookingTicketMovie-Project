import { cloneElement } from "react";
import {
  LAY_THONG_TIN_PHIM,
  SET_DANH_SACH_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../type/phimType";

let initialState = {
  arrFilm: [],
  arrFilmDefault: [],
  dangChieu: false,
  sapChieu: false,
  thongTinChiTietPhim: {},
};
export const quanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.payload;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = true;
      state.sapChieu = false;
      state.arrFilm = state.arrFilmDefault.filter((phim) => phim.dangChieu);
      return { ...state };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = true;
      state.dangChieu = false;

      state.arrFilm = state.arrFilmDefault.filter((phim) => phim.sapChieu);
      return { ...state };
    }
    case LAY_THONG_TIN_PHIM: {
      state.thongTinChiTietPhim = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
