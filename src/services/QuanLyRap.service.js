import { GROUPID } from "../util/configURL/constanURL";
import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  layThongTinLichChieuHeThongRap = () => {
    const uri = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`;
    return AxiosServ.getMethod(uri);
  };

  layHeThongRap = () => {
    const uri = `/api/QuanLyRap/LayThongTinHeThongRap`;
    return AxiosServ.getMethod(uri);
  };
}

const QuanLyRapServ = new HttpRequestService();

export default QuanLyRapServ;
