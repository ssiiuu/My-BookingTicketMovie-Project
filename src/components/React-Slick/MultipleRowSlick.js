import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import ItemPhim from "../../pages/Home/ItemPhim/ItemPhim";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/type/phimType";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.quanLyPhimReducer
  );

  const renderPhim = () => {
    return props.arrFilm?.slice(0, 10).map((phim, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <ItemPhim phim={phim} />
        </div>
      );
    });
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let activeBtnDC = dangChieu ? "active-btn-film" : "none-active-btn-film";
  let activeBtnSC = sapChieu ? "active-btn-film" : "none-active-btn-film";
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: SET_PHIM_DANG_CHIEU,
          });
        }}
        type="button"
        className={`${styleSlick[activeBtnDC]} px-8 py-3 font-semibold border rounded mr-2`}
      >
        Phim đang chiếu
      </button>
      <button
        onClick={() => {
          dispatch({
            type: SET_PHIM_SAP_CHIEU,
          });
        }}
        type="button"
        className={`${styleSlick[activeBtnSC]} px-8 py-3 font-semibold border rounded `}
      >
        Phim sắp chiếu
      </button>
      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
};
export default MultipleRows;
