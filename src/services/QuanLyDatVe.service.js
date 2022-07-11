import { GROUPID } from "../util/configURL/constanURL";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  layChiTietPhongVe = (maLichChieu) => {
    const uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return AxiosServ.getMethod(uri);
  };
  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    const uri = `/api/QuanLyDatVe/DatVe`;
    return AxiosServ.postMethod(uri, thongTinDatVe);
  };
}

const QuanLyDatVeServ = new HttpRequestService();

export default QuanLyDatVeServ;
