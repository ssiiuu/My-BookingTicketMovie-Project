import axios from "axios";
import httpServ from "../../services/http.service";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../util/configURL/constanURL";
import { SET_CAROUSEL } from "../type/carouselType";

export const getCarouselAction = () => {
  return (dispatch) => {
    // axios({
    //   url: DOMAIN + "/api/QuanLyPhim/LayDanhSachBanner",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft: TOKEN_CYBERSOFT,
    //   },
    // })
    httpServ
      .layCarouselHomePage()
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
