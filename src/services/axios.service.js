import Axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../util/configURL/constanURL";
import { store } from "../redux/configStore";
import localStorageServ from "./locaStorage.service";
import {
  endLoadingAction,
  startLoadingAction,
} from "../redux/actions/loadingAction";

class AxiosService {
  axios;
  axiosConfig;
  authService;
  constructor(params) {
    this.axios = Axios.create({
      baseURL: this.getBaseUrl(),
    });
    this.getAxiosConfig();
  }

  getBaseUrl() {
    return DOMAIN;
  }

  getAxiosConfig = (_token) => {
    // const token = _token ? _token : localStorageServ.accessToken.get();
    this.axiosConfig = {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer" + localStorageServ.accessToken.get(),
      },
    };
  };

  removeAxiosConfig = () => {
    this.axiosConfig = {
      headers: {
        iKeapy: ``,
        "Content-Type": "application/json",
      },
    };
  };

  getMethod(uri, loading = true) {
    return this.handleFlow(this.axios.get(uri, this.axiosConfig), loading);
  }

  postMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.post(uri, data, this.axiosConfig),
      loading
    );
  }

  putMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.put(uri, data, this.axiosConfig),
      loading
    );
  }

  patchMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.patch(uri, data, this.axiosConfig),
      loading
    );
  }

  deleteMethod(uri, loading = true) {
    return this.handleFlow(this.axios.delete(uri, this.axiosConfig), loading);
  }

  handleFlow(method, loading = true) {
    store.dispatch(startLoadingAction());
    return new Promise((resolve, reject) => {
      method
        .then((res) => {
          store.dispatch(endLoadingAction());
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err) => {
          store.dispatch(endLoadingAction());
          this.handleError(err);
          reject({
            err: err,
          });
        });
    });
  }

  handleError = (err) => {
    const status = err.response?.status;
    switch (
      status
      // case 400:
      // case 401:
      // case 403:
      //   window.location.assign("/lms");
      //   break;
      // default:
      //   break;
    ) {
    }
  };
  //
  axiosInstance = (req) => {
    this.axios(req, this.axiosConfig);
  };
}

const AxiosServ = new AxiosService();
export default AxiosServ;
