import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/style/circleRating.css";
import { StarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhimAction } from "../../redux/actions/quanLyPhimAction";
import moment from "moment";
import { Button, Rate } from "antd";
import DetailLichChieuPhim from "./DetailLichChieuPhim/DetailLichChieuPhim";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, []);

  const { thongTinChiTietPhim } = useSelector(
    (state) => state.quanLyPhimReducer
  );

  return (
    <div
      style={{
        backgroundImage: `url(${thongTinChiTietPhim.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 700,
      }}
    >
      <CustomCard
        style={{ minHeight: 700, paddingTop: 150 }}
        effectColor="#04823b" // required
        color="black" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="">
          <div className="grid grid-cols-6">
            <div className="col-start-2">
              <img
                style={{ width: 300, height: 400, objectFit: "cover" }}
                src={thongTinChiTietPhim.hinhAnh}
                alt="..."
              />
            </div>
            <div className="col-span-2 flex items-center ml-4">
              <div className="text-white">
                {thongTinChiTietPhim.hot ? (
                  <Button className=" font-bold bg-yellow-500">Hot</Button>
                ) : (
                  <></>
                )}
                <p className="font-bold text-5xl">
                  {thongTinChiTietPhim.tenPhim}
                </p>
                <p className="font-semibold text-xl">
                  {moment(thongTinChiTietPhim.ngayKhoiChieu).format(
                    "DD.MM.YYYY"
                  )}
                </p>
                <p className="font-semibold ">{thongTinChiTietPhim.moTa}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className={`c100 p${
                  thongTinChiTietPhim.danhGia * 10
                } big green`}
              >
                <span>{thongTinChiTietPhim.danhGia}</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div>
                <Rate
                  allowHalf
                  disabled
                  value={thongTinChiTietPhim.danhGia / 2}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-start-2 col-span-4 mt-20 bg-white p-5">
              <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                centered={true}
                tabBarGutter={50}
                tabBarStyle={{ color: "green" }}
                style={{ minHeight: 500 }}
              >
                <TabPane tab="Lịch Chiếu" key="1">
                  <DetailLichChieuPhim />
                </TabPane>
                <TabPane tab="Thông Tin" key="2">
                  Thông tin
                </TabPane>
                <TabPane tab="Đánh Giá" key="3">
                  Đánh giá
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
