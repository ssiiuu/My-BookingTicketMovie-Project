import QuanLyRapServ from "../../services/QuanLyRap.service";
import { SET_HE_THONG_RAP } from "../type/quanLyRapType";

export const layThongTinLichChieuHeThongRapAction = () => {
  return (dispatch) => {
    QuanLyRapServ.layThongTinLichChieuHeThongRap()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const layHeThongRapAction = () => {
  return (dispatch) => {
    QuanLyRapServ.layHeThongRap()
      .then((res) => {
        dispatch({
          type: SET_HE_THONG_RAP,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
