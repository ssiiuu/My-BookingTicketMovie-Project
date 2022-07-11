import { GROUPID } from "../util/configURL/constanURL";
import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  layCarouselHomePage = () => {
    const uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return AxiosServ.getMethod(uri, false);
  };

  layDanhSachPhim = () => {
    const uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`;
    return AxiosServ.getMethod(uri);
  };

  layThongTinLichChieuHeThongRap = () => {
    const uri = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`;
    return AxiosServ.getMethod(uri);
  };
}

const httpServ = new HttpRequestService();

export default httpServ;
