import useSelection from "antd/lib/table/hooks/useSelection";
import React from "react";
import { useSelector } from "react-redux";
import { history } from "../../../App";
import UserLogged from "./UserLogged";

export default function UserNavHeader() {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  return userInfor ? (
    <UserLogged />
  ) : (
    <div>
      <div
        className="items-center flex-shrink-0 hidden lg:flex"
        style={{ color: "#9b9b9b" }}
      >
        <div className="inline-flex items-center border-r-1 pr-2">
          <svg
            style={{ width: 30, marginRight: 5, fill: "#9b9b9b" }}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
          </svg>
          <div>
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="text-base font-semibold"
            >
              Đăng Nhập
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            history.push("/register");
          }}
          className="text-base font-semibold pl-2"
        >
          Đăng Ký
        </button>
      </div>
    </div>
  );
}
