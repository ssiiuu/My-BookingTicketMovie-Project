import { GROUPID } from "../util/configURL/constanURL";
import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  layThongTinChiTietPhim = (maPhim) => {
    // const uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    const uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return AxiosServ.getMethod(uri);
  };
}

const QuanLyPhimServ = new HttpRequestService();

export default QuanLyPhimServ;
