import React from "react";
import { Tabs, Collapse } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function DetailLichChieuPhim() {
  const { thongTinChiTietPhim } = useSelector(
    (state) => state.quanLyPhimReducer
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderHeThongRapLichChieu = () => {
    return thongTinChiTietPhim.heThongRapChieu?.map((heThongRap) => {
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width={60} />
          }
          key={heThongRap.maHeThongRap}
        >
          {heThongRap.cumRapChieu?.map((cumRap, indexRap) => {
            console.log({ cumRap });
            return (
              <Collapse key={indexRap} defaultActiveKey={["0"]}>
                <Panel
                  header={
                    <div className="flex " style={{ width: "100%" }}>
                      <img
                        src={cumRap.hinhAnh}
                        className="rounded mr-2"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="text-left">
                        <h2
                          className="font-bold text-lg text-green-600"
                          style={{ whiteSpace: "initial" }}
                        >
                          {cumRap.tenCumRap}
                        </h2>
                        <span style={{ whiteSpace: "initial" }}>
                          {cumRap.diaChi}
                        </span>
                      </div>
                    </div>
                  }
                >
                  <div
                    className="overflow-y-scroll grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    style={{ height: 700 }}
                  >
                    {cumRap.lichChieuPhim.map((phim) => {
                      return (
                        <div className="mt-5" key={cumRap.maLichChieu}>
                          <NavLink
                            to={`/ticketbooking/${phim.maLichChieu}`}
                            className="text-green-600 border-2 border-green-600 hover:text-white hover:bg-green-600 rounded p-1 w-44"
                          >
                            {moment(phim.ngayChieuGioChieu).format(
                              "hh:mm A - DD.MM.YYYY"
                            )}
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </Panel>
              </Collapse>
            );
          })}
        </TabPane>
      );
    });
  };
  return (
    <>
      <Tabs tabPosition={"top"} centered defaultActiveKey="0">
        {renderHeThongRapLichChieu()}
      </Tabs>
    </>
  );
}
