import httpServ from "../../services/http.service";

export const layHeThongRapChieuAction = () => {
  return (dispatch) => {
    httpServ
      .layThongTinLichChieuHeThongRap()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
