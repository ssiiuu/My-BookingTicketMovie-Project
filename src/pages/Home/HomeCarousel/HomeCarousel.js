import React, { useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../redux/actions/carouselAction";
import "./HomeCarousel.css";

export default function HomeCarousel() {
  const dispatch = useDispatch();
  const { arrCarousel } = useSelector((state) => state.carouselReducer);
  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  // const contentStyle = {
  //   height: "100vh",
  //   width: "100vw",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  const renderCarousel = () => {
    return arrCarousel.map((item, index) => {
      return (
        <div key={index}>
          <img
            style={{ width: "100vw", height: "700px" }}
            src={item.hinhAnh}
            alt="123"
          />
        </div>
      );
    });
  };
  return (
    <Carousel arrows nextArrow={<RightOutlined />} prevArrow={<LeftOutlined />}>
      {renderCarousel()}
    </Carousel>
  );
}
