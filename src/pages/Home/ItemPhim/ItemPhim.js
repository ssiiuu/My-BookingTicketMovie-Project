import React from "react";
import { Card } from "antd";
import "./ItemPhim.css";
import { history } from "../../../App";
import { useDispatch } from "react-redux";
import { CaretRightOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function ItemPhim({ phim }) {
  const dispatch = useDispatch();
  return (
    <div className="item-film p-5" style={{ width: "100%", height: 450 }}>
      <div
        className="item-film-img w-full cursor-pointer "
        style={{ height: 350 }}
      >
        <img
          src={phim.hinhAnh}
          alt={phim.tenPhim}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 6,
          }}
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
        <div className="btn-rate-film">{phim.danhGia}</div>
        <div
          className="btn-detail-film"
          onClick={() => {
            history.push(`/detail/${phim.maPhim}`);
          }}
        >
          CHI TIẾT PHIM
        </div>
      </div>
      <div className="text-center flex">
        <div className="w-10 h-5 mt-1 mr-2 text-white bg-yellow-500 rounded-sm">
          Hot
        </div>
        <span className="text-green-700 font-bold text-xl m-0">
          {phim.tenPhim}
        </span>
      </div>
    </div>
  );
}
