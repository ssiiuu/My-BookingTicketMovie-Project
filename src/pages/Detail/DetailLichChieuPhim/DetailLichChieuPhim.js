import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;

export default function DetailLichChieuPhim() {
  const { thongTinChiTietPhim } = useSelector(
    (state) => state.quanLyPhimReducer
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderHeThongRapLichChieu = () => {
    return thongTinChiTietPhim.heThongRapChieu?.map((HTR, indexHTR) => {
      return (
        <TabPane
          tab={
            <img
              style={{ width: 50, height: 50, objectFit: "cover" }}
              src={HTR.logo}
            />
          }
          key={indexHTR}
        >
          {HTR.cumRapChieu?.map((cumRap, indexCumRap) => {
            return (
              <div className="mb-10" key={indexCumRap}>
                <div className="flex mb-5">
                  <img
                    src={cumRap.hinhAnh}
                    alt={cumRap.tenCumRap}
                    style={{ width: 60, height: 60, borderRadius: 6 }}
                  />
                  <div style={{ lineHeight: 1, marginLeft: 10 }}>
                    <h1 className="text-green-700 text-xl text-left">
                      {cumRap.tenCumRap}
                    </h1>
                    <p className="text-green-500 text-left mt-2">
                      {cumRap.diaChi}
                    </p>
                  </div>
                </div>
                <div className="lich-chieu grid grid-cols-4">
                  {cumRap.lichChieuPhim
                    ?.slice(0, 12)
                    .map((lichChieu, indexLichChieu) => {
                      return (
                        <div className="col-span-1 mb-5" key={indexLichChieu}>
                          <NavLink
                            to={`/ticketbooking/${lichChieu.maLichChieu}`}
                            className="text-green-600 border-2 border-green-600 hover:text-white hover:bg-green-600 rounded px-1 py-1"
                          >
                            {moment(lichChieu.ngayChieuGioChieu).format(
                              "hh:mm A - DD.MM.YYYY"
                            )}
                          </NavLink>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };

  return (
    <Tabs tabPosition={"left"} defaultActiveKey={0}>
      {renderHeThongRapLichChieu()}
    </Tabs>
  );
}
