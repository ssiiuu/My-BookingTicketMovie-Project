import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import ItemPhim from "../../pages/Home/ItemPhim/ItemPhim";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/type/phimType";
import styleSlick from "./MultipleRowSlick.module.css";
import ModalAnt from "../Modal-Ant/ModalAnt";
import { Input, Modal } from "antd";
import ReactPlayer from "react-player";
import { CloseOutlined } from "@ant-design/icons";
const { Search } = Input;

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

const onSearch = (value) => console.log(value);

const MultipleRows = ({ arrFilm }) => {
  const [trailerURL, setTrailerURL] = useState("");

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const { dangChieu, sapChieu } = useSelector(
    (state) => state.quanLyPhimReducer
  );

  let arrFilmSearched = arrFilm.filter((phim) => {
    return phim.tenPhim.toLowerCase().includes(searchInput.toLowerCase());
  });

  const renderPhim = () => {
    return arrFilmSearched?.map((phim, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            setTrailerURL(phim.trailer);
            showModal();
          }}
        >
          <ItemPhim phim={phim} />
        </div>
      );
    });
  };

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 700,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  let activeBtnDC = dangChieu ? "active-btn-film" : "none-active-btn-film";
  let activeBtnSC = sapChieu ? "active-btn-film" : "none-active-btn-film";

  const showModal = () => {
    setIsModalVisible(true);
    setIsPlaying(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsPlaying(false);
  };

  return (
    <div>
      <div className="listfilm__top  md:flex flex-row justify-between">
        <Search
          className="listfilm__search w-full my-3 md:my-5"
          style={{ width: 300 }}
          placeholder="Nhập tên phim..."
          onSearch={onSearch}
          enterButton
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <div className=" w-full flex items-center justify-center">
          <button
            onClick={() => {
              dispatch({
                type: SET_PHIM_DANG_CHIEU,
              });
            }}
            type="button"
            className={`listfilm__btn ${styleSlick[activeBtnDC]} px-4 py-2 font-semibold border rounded mr-2`}
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
            className={`listfilm__btn ${styleSlick[activeBtnSC]} px-4 py-2 font-semibold border rounded `}
          >
            Phim sắp chiếu
          </button>
        </div>
      </div>
      <ModalAnt
        isPlaying={isPlaying}
        trailerURL={trailerURL}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
      <Slider {...settings} className="m-10 ">
        {renderPhim()}
      </Slider>
    </div>
  );
};
export default MultipleRows;
