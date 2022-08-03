import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/quanLyDatVeAction";
import "./TicketBookingPage.css";
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/type/quanLyDatVeType";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";

export default function TicketBookingPage(props) {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  const { maLichChieu } = useParams();

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.quanLyDatVeReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietPhongVeAction(maLichChieu));
  }, []);

  console.log("chiTietPhongVe", chiTietPhongVe);
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classgheVIP = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classgheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classgheDangDat = "";

      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      if (indexGheDD !== -1) {
        classgheDangDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                payload: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classgheVIP} ${classgheDaDat} ${classgheDangDat} `}
          >
            {ghe.daDat ? (
              <CloseOutlined style={{ marginBottom: 6 }} />
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="m-5 min-h-screen">
      <div className="grid grid-cols-12 ">
        <div className="col-span-9 mt-5">
          <div className="flex justify-center">
            <div>
              <img
                src="https://movie-booking-project.vercel.app/img/bookticket/screen.png"
                alt="man-hinh"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>{renderSeats()}</div>
          </div>
        </div>
        <div className="min-h-screen col-span-3 flex flex-col justify-between">
          <div className="">
            <div className="text-center">
              <span className="text-green-600 text-4xl font-bold">
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                Đ
              </span>
            </div>
            <hr />
            <div>
              <h3 className="text-xl text-black font-bold">
                {thongTinPhim.tenPhim}
              </h3>
              <p>
                Địa điểm: {thongTinPhim.diaChi} - {thongTinPhim.tenCumRap}
              </p>
              <p>
                Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}{" "}
                {thongTinPhim.tenRap}
              </p>
            </div>
            <hr />
            <div className=" py-5">
              <span className=" text-red-600 text-xl">Ghế: </span>
              {danhSachGheDangDat.map((gheDD) => {
                return (
                  <span
                    className="text-xl font-semibold text-green-600 mr-2 inline-block"
                    key={gheDD.stt}
                  >
                    {gheDD.stt}
                  </span>
                );
              })}
            </div>
            <hr />
            <div>
              <i className="text-gray-600">Email</i>
              <p className="text-black font-semibold">{userInfor.email}</p>
            </div>
            <hr />
            <div>
              <i className="text-gray-600">Phone</i>
              <p className="text-black font-semibold">{userInfor.soDT}</p>
            </div>
            <hr />
          </div>

          <div className="mb-10 ">
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.maLichChieu;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                console.log("thongTinDatVe", thongTinDatVe);
                dispatch(datVeAction(thongTinDatVe));
              }}
              className="w-full bg-green-600 text-white text-center text-2xl p-3 cursor-pointer"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
