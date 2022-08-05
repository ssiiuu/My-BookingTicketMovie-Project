import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
export default function ItemTabsPhim({ phim }) {
  return (
    <div className="flex">
      <img
        src={phim.hinhAnh}
        alt={phim.tenPhim}
        style={{ width: "75px", height: "75px", objectFit: "cover" }}
        className="itemTabsPhim__img my-2 rounded "
      />
      <div className="ml-3 itemTabsPhim__content">
        <h2 className="font-bold text-green-600">{phim.tenPhim}</h2>
        <div className="tabsfilm__item-lichChieu grid grid-cols-3 gap-4">
          {phim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
            return (
              <NavLink
                to={`/ticketbooking/${lichChieu.maLichChieu}`}
                key={index}
                className="text-green-700 border-2 border-green-400 hover:text-white hover:bg-green-700 rounded p-1"
              >
                {moment(lichChieu.ngayChieuGioChieu).format(
                  "hh:mm A - DD.MM.YYYY"
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
