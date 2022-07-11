import localStorageServ from "../../services/locaStorage.service";
import { SET_USER_INFOR } from "../type/nguoiDungType";

const initialState = {
  userInfor: localStorageServ.userInfor.get(),
};

export const quanLyNguoiDungReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_USER_INFOR: {
      state.userInfor = payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
