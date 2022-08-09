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

  const renderCarousel = () => {
    return arrCarousel.map((item, index) => {
      return (
        <div key={index} className="w-screen h-fit">
          <img
            className="homecarousel__img  w-full object-cover"
            style={{ height: 300 }}
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
