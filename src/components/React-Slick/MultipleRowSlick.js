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
import { Input } from "antd";
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
      <div className="flex items-center justify-between">
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
        </div>
        <Search
          style={{ width: 300 }}
          placeholder="Nhập tên phim..."
          onSearch={onSearch}
          enterButton
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <ModalAnt
        isPlaying={isPlaying}
        trailerURL={trailerURL}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />

      <Slider {...settings} className="mt-10">
        {renderPhim()}
      </Slider>
    </div>
  );
};
export default MultipleRows;
