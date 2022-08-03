import QuanLyPhimServ from "../../services/QuanLyPhim.service";
import { SET_CAROUSEL } from "../type/carouselType";

export const getCarouselAction = () => {
  return (dispatch) => {
    QuanLyPhimServ.layCarouselHomePage()
      .then((res) => {
        dispatch({
          type: SET_CAROUSEL,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
