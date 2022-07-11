import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRows from "../../../components/React-Slick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../../redux/actions/quanLyPhimAction";

export default function ListPhim() {
  const { arrFilm } = useSelector((state) => state.quanLyPhimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  return (
    <div className="container mx-auto">
      <MultipleRows arrFilm={arrFilm} />

      {/* <div className=" flex flex-wrap">{renderDSPhim()}</div> */}
    </div>
  );
}
