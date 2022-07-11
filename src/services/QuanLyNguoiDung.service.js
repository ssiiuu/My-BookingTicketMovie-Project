import { GROUPID } from "../util/configURL/constanURL";
import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  dangKy = (data) => {
    const uri = `/api/QuanLyNguoiDung/DangKy`;
    return AxiosServ.postMethod(uri, data);
  };
  dangNhap = (data) => {
    const uri = `/api/QuanLyNguoiDung/DangNhap`;
    return AxiosServ.postMethod(uri, data);
  };
  // layCarouselHomePage = () => {
  //   const uri = "/api/QuanLyPhim/LayDanhSachBanner";
  //   return AxiosServ.getMethod(uri, false);
  // };
}

const QuanLyNguoiDungServ = new HttpRequestService();

export default QuanLyNguoiDungServ;
