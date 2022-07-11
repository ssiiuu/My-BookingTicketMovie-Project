import { history } from "../../App";
import QuanLyNguoiDungServ from "../../services/QuanLyNguoiDung.service";
import { Alert, Button, message, Result } from "antd";
import localStorageServ from "../../services/locaStorage.service";
import { SET_USER_INFOR } from "../type/nguoiDungType";

export const dangKyAction = (data) => {
  return (dispatch) => {
    QuanLyNguoiDungServ.dangKy(data)
      .then((res) => {
        // console.log("res", res);
        message.success("Đăng ký thành công!");
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      })
      .catch((err) => {
        // console.log("err", err);
        message.error(`${err.err.response.data.content}`);
      });
  };
};

export const dangNhapAction = (data) => {
  return (dispatch) => {
    QuanLyNguoiDungServ.dangNhap(data)
      .then((res) => {
        // console.log("res", res);
        localStorageServ.userInfor.set(res.data.content);
        localStorageServ.accessToken.set(res.data.content.accessToken);
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
        message.success("Đăng nhập thành công!");
        setTimeout(() => {
          history.goBack();
        }, 3000);
      })
      .catch((err) => {
        // console.log("err", err);
        message.error(`${err.err.response.data.content}`);
      });
  };
};
