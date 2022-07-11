import httpServ from "../../services/http.service";
import QuanLyPhimServ from "../../services/QuanLyPhim.service";
import { LAY_THONG_TIN_PHIM, SET_DANH_SACH_PHIM } from "../type/phimType";

export const layDanhSachPhimAction = () => {
  return (dispatch) => {
    httpServ
      .layDanhSachPhim()
      .then((res) => {
        dispatch({
          type: SET_DANH_SACH_PHIM,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return (dispatch) => {
    QuanLyPhimServ.layThongTinChiTietPhim(maPhim)
      .then((res) => {
        dispatch({
          type: LAY_THONG_TIN_PHIM,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
