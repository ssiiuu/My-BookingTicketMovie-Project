import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/style/circleRating.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhimAction } from "../../redux/actions/quanLyPhimAction";
import moment from "moment";
import { Rate } from "antd";
import DetailLichChieuPhim from "./DetailLichChieuPhim/DetailLichChieuPhim";
import { Tabs } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "../Home/ItemPhim/ItemPhim.css";
import ModalAnt from "../../components/Modal-Ant/ModalAnt";

const { TabPane } = Tabs;

const onChange = (key) => {
  // console.log(key);
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

  const [trailerURL, setTrailerURL] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    setIsPlaying(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsPlaying(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${thongTinChiTietPhim.hinhAnh}), url("https:/picsum.photos/500")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 700,
      }}
    >
      <ModalAnt
        isPlaying={isPlaying}
        trailerURL={trailerURL}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
      <CustomCard
        style={{ minHeight: 700, paddingTop: 150 }}
        effectColor="#1f2937" // required
        color="white" // default color is white
        blur={50} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="lg:container lg:mx-auto">
          <div className="flex flex-col items-center xl:grid xl:grid-cols-3">
            <div className="col-span-1 ">
              <div
                style={{ width: 300, height: 400 }}
                onClick={() => {
                  setTrailerURL(thongTinChiTietPhim.trailer);
                  showModal();
                }}
                className="item-film-img cursor-pointer"
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                  src={thongTinChiTietPhim.hinhAnh}
                  alt={thongTinChiTietPhim.tenPhim}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://picsum.photos/500";
                  }}
                />

                <div className="overlay-film"></div>
                <div className="play-trailer">
                  <div className="btn-play-trailer">
                    <CaretRightOutlined className="text-white text-6xl" />
                  </div>
                </div>
                <div className="btn-rate-film">
                  {thongTinChiTietPhim.danhGia}
                </div>
              </div>
            </div>
            <div className="col-span-2 xl:flex justify-around">
              <div className="text-white text-center xl:text-left">
                {thongTinChiTietPhim.hot ? (
                  <div className="w-10 h-5 text-center font-bold bg-yellow-500">
                    Hot
                  </div>
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
          </div>

          <div className="col-start-2 col-span-4 mt-20 bg-white p-5">
            <DetailLichChieuPhim />
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
