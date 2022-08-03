import QuanLyDatVeServ from "../../services/QuanLyDatVe.service";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_CHI_TIET_PHONG_VE } from "../type/quanLyDatVeType";
import { Button, message, Result } from "antd";
import { history } from "../../App";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return (dispatch) => {
    QuanLyDatVeServ.layChiTietPhongVe(maLichChieu)
      .then((res) => {
        // console.log("res", res);
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return (dispatch) => {
    QuanLyDatVeServ.datVe(thongTinDatVe)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
        err.err.response.status === 401 ? (
          message.error({
            content: `Bạn không có quyền truy cập, hãy đăng nhập lại!`,
            style: {
              marginTop: "20vh",
            },
          })
        ) : (
          <></>
        );

        history.goBack();
      });
  };
};
