// tạo lớp đối tượng mặc định ban đầu cho thongTinPhongVe (thay thế sử dụng toán tử '?')

export class ThongTinPhongVe {
  thongTinPhim = new ThongTinPhim();
  danhSachGhe = [];
}

export class ThongTinPhim {
  maLichCheu = "";
  tenCumRap = "";
  tenRap = "";
  diaChi = "";
  tenPhim = "";
  hinhAnh = "";
  ngayChieu = "";
  gioChieu = "";
}

export class Ghe {
  maGhe = "";
  tenGhe = "";
  maRap = "";
  loaiGhe = "";
  stt = "";
  giaVe = "";
  daDat = "";
  taiKhoanNguoiDat = "";
}
