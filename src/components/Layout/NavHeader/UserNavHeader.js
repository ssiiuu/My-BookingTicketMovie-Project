import useSelection from "antd/lib/table/hooks/useSelection";
import React from "react";
import { useSelector } from "react-redux";
import { history } from "../../../App";
import UserLoggedIn from "./UserLoggedIn";
import UserNotLoggedIn from "./UserNotLoggedIn";

export default function UserNavHeader() {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  return userInfor ? <UserLoggedIn /> : <UserNotLoggedIn />;
}
