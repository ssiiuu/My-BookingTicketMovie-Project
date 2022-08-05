import React, { useEffect, useState } from "react";
import { Tabs, Collapse } from "antd";
import ItemTabsPhim from "./ItemTabsPhim";
import QuanLyPhimServ from "../../../services/QuanLyPhim.service";

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function TabsPhim(props) {
  const [arrHeThongRap, setArrHeThongRap] = useState([]);

  useEffect(() => {
    QuanLyPhimServ.layThongTinLichChieuHeThongRap()
      .then((res) => {
        setArrHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const renderHeThongRap = () => {
    return arrHeThongRap.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width={60} />
          }
          key={index}
        >
          <Tabs tabPosition={"left"} defaultActiveKey="0" key={index}>
            {heThongRap.lstCumRap?.map((cumRap, indexRap) => {
              return (
                <TabPane
                  tab={
                    <div
                      className="tabsfilm__tab-cumRap flex "
                      style={{ width: 400 }}
                    >
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
                        <p className="text-red-400 ">
                          Chi tiết <i className="fa fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  }
                  key={indexRap}
                >
                  <div className="overflow-y-scroll" style={{ height: 700 }}>
                    {cumRap.danhSachPhim.map((phim, indexPhim) => {
                      return (
                        <div className="mb-5" key={indexPhim}>
                          <ItemTabsPhim phim={phim} />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  const renderHeThongRapMobile = () => {
    return arrHeThongRap.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width={60} />
          }
          key={index}
        >
          {heThongRap.lstCumRap?.map((cumRap, indexRap) => {
            return (
              <Collapse key={indexRap} defaultActiveKey={["0"]}>
                <Panel
                  header={
                    <div
                      className="tabsfilm__tab-cumRap flex "
                      style={{ width: "80%" }}
                    >
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
                  <div className="overflow-y-scroll" style={{ height: 700 }}>
                    {cumRap.danhSachPhim.map((phim, indexPhim) => {
                      return (
                        <div className="mb-5" key={indexPhim}>
                          <ItemTabsPhim phim={phim} />
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
    <div id="cumRap" className="mt-20">
      <Tabs tabPosition={"left"} defaultActiveKey="0" className="tabsPhim">
        {renderHeThongRap()}
      </Tabs>
      <Tabs
        tabPosition={"top"}
        defaultActiveKey="0"
        className="tabsPhim__mobile hidden px-5"
      >
        {renderHeThongRapMobile()}
      </Tabs>
    </div>
  );
}
