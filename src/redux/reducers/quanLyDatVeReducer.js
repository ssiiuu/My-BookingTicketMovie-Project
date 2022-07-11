import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../type/quanLyDatVeType";
import { ThongTinPhongVe } from "../../_core/models/ThongTinPhongVe";

const initialState = {
  chiTietPhongVe: new ThongTinPhongVe(),
  danhSachGheDangDat: [],
};

export const quanLyDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = payload;
      return { ...state };
    }
    case DAT_VE: {
      let danhSachCapNhatGheDD = [...state.danhSachGheDangDat];

      let index = danhSachCapNhatGheDD.findIndex(
        (gheDD) => gheDD.maGhe === payload.maGhe
      );

      if (index !== -1) {
        danhSachCapNhatGheDD.splice(index, 1);
      } else {
        danhSachCapNhatGheDD.push(payload);
      }
      return { ...state, danhSachGheDangDat: danhSachCapNhatGheDD };
    }

    default:
      return { ...state };
  }
};
