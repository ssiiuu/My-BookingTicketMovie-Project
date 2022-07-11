/* eslint-disable no-useless-constructor */
class LocalStorageKey {
  ACCESS_TOKEN_MOVIE = "ACCESS_TOKEN_MOVIE";
  USER_INFOR_MOVIE = "USER_INFOR_MOVIE";
}

class BaseStorage {
  key;

  constructor(_key) {
    this.key = _key;
  }

  set = (value) => {
    const dataString = JSON.stringify(value);
    localStorage.setItem(this.key, dataString);
  };

  get = () => {
    const dataString = localStorage.getItem(this.key);
    return !dataString ? null : JSON.parse(dataString);
  };

  remove = () => {
    localStorage.removeItem(this.key);
  };
}

class LocalStorageService extends LocalStorageKey {
  constructor() {
    super();
  }

  clearLocalStorage = () => {
    localStorage.clear();
  };
  /**
   * access token storage
   */

  accessToken = new BaseStorage(this.ACCESS_TOKEN_MOVIE);

  userInfor = new BaseStorage(this.USER_INFOR_MOVIE);
}

const localStorageServ = new LocalStorageService();

export default localStorageServ;
