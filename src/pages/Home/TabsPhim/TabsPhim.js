import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import httpServ from "../../../services/http.service";
import ItemTabsPhim from "./ItemTabsPhim";

const { TabPane } = Tabs;

export default function TabsPhim(props) {
  const [arrHeThongRap, setArrHeThongRap] = useState([]);
  useEffect(() => {
    httpServ
      .layThongTinLichChieuHeThongRap()
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
                    <div className="flex">
                      <img
                        src={cumRap.hinhAnh}
                        className="rounded mr-2"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="text-left">
                        <h2 className="font-bold text-lg text-green-600">
                          {cumRap.tenCumRap}
                        </h2>
                        <span>{cumRap.diaChi}</span>
                        <p className="text-red-400 ">
                          Chi tiết <i className="fa fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  }
                  key={indexRap}
                >
                  <div className="overflow-y-scroll" style={{ height: 700 }}>
                    {cumRap.danhSachPhim
                      ?.slice(0, 10)
                      .map((phim, indexPhim) => {
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
  return (
    <Tabs tabPosition={"left"} defaultActiveKey="0" className="mt-20">
      {renderHeThongRap()}
    </Tabs>
  );
}
