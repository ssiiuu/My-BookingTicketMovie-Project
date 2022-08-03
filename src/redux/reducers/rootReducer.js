import { combineReducers } from "redux";
import { carouselReducer } from "./carouselReducer";
import { loadingReducer } from "./loadingReducer";
import { quanLyNguoiDungReducer } from "./nguoiDungReducer";
import { quanLyPhimReducer } from "./phimReducer";
import { quanLyDatVeReducer } from "./quanLyDatVeReducer";
import { quanLyRapReducer } from "./quanLyRapReducer";

export const rootReducer = combineReducers({
  carouselReducer,
  quanLyPhimReducer,
  quanLyNguoiDungReducer,
  quanLyDatVeReducer,
  loadingReducer,
  quanLyRapReducer,
});
