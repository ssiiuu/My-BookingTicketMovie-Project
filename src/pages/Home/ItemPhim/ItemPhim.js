import React from "react";
import { Card } from "antd";
import "./ItemPhim.css";
import { history } from "../../../App";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { layThongTinPhimAction } from "../../../redux/actions/quanLyPhimAction";
const { Meta } = Card;
export default function ItemPhim({ phim }) {
  const dispatch = useDispatch();
  return (
    <div className="flip-card mt-3 ">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={phim.hinhAnh}
            alt="Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="flip-card-back">
          <div>
            <button
              type="button"
              className="px-8 py-3 font-semibold border rounded bg-black text-white mb-3 mt-10"
              style={{ width: "180px" }}
            >
              ĐẶT VÉ
            </button>
          </div>
          <div>
            <NavLink
              to={`/detail/${phim.maPhim}`}
              type="button"
              className="px-8 py-3 font-semibold border rounded bg-black text-white  mb-5"
              style={{ width: "180px" }}
            >
              XEM CHI TIẾT
            </NavLink>
            <h1 className="text-xl text-yellow-700">{phim.tenPhim}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
