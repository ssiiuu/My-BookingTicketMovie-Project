import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import UserNavHeader from "./UserNavHeader";
import "./NavHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_INFOR } from "../../../redux/type/nguoiDungType";
import localStorageServ from "../../../services/locaStorage.service";
import { CloseOutlined } from "@ant-design/icons";

export default function NavHeader() {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogOut = () => {
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });
    localStorageServ.userInfor.remove();
    localStorageServ.accessToken.remove();
    history.push("/login");
  };
  return (
    <div>
      <header className="p-2 shadow-xl fixed bg-white text-black w-full z-50 ">
        <div className="navHeader container flex justify-between items-center  mx-auto">
          <NavLink
            to={"/"}
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              style={{ width: 150 }}
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="cybersoft-logo"
            />
          </NavLink>
          <ul className="navHeader__link items-stretch space-x-2 lg:flex flex   ">
            <li>
              <a
                onClick={() => {
                  history.push("/");
                }}
                rel="noopener noreferrer"
                href="#lichChieu"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1 hover:text-green-600 hover:text-3xl"
              >
                Lịch Chiếu
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  history.push("/");
                }}
                rel="noopener noreferrer"
                href="#cumRap"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1 hover:text-green-600 hover:text-3xl"
              >
                Cụm Rạp
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  history.push("/");
                }}
                rel="noopener noreferrer"
                href="#tinTuc"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1  hover:text-green-600 hover:text-3xl"
              >
                Tin Tức
              </a>
            </li>
          </ul>
          <div className="navHeader__user">
            <UserNavHeader />
          </div>

          <button
            onClick={() => {
              setOpenMenu(true);
            }}
            className="navHeader__btn hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-coolGray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {openMenu ? (
            <div className="navHeader__overlay">
              <div
                className="navHeader__overlay__close"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <CloseOutlined />
              </div>
              <ul className="navHeader__overlay__link">
                <li>
                  <NavLink
                    to={"/profile"}
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    <div className="flex items-center">
                      {userInfor.avatar ? (
                        <img
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: "100%",
                          }}
                          src={userInfor.avatar}
                          alt="avatar"
                        />
                      ) : (
                        <img
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: "100%",
                          }}
                          src="https:/picsum.photos/500"
                          alt="avatar"
                        />
                      )}
                      <span className="ml-3">{userInfor.hoTen}</span>
                    </div>
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setOpenMenu(false);
                    history.push("/");
                  }}
                >
                  <a href="#lichChieu">Lịch chiếu</a>
                </li>
                <li
                  onClick={() => {
                    setOpenMenu(false);
                    history.push("/");
                  }}
                >
                  <a href="#cumRap">Cụm rạp</a>
                </li>
                <li
                  onClick={() => {
                    setOpenMenu(false);
                    history.push("/");
                  }}
                >
                  <a href="#tinTuc">Tin tức</a>
                </li>
                <li
                  onClick={() => {
                    setOpenMenu(false);
                    history.push("/");
                  }}
                >
                  <a href="#">Trợ giúp</a>
                </li>
                <li
                  onClick={() => {
                    handleLogOut();
                    setOpenMenu(false);
                  }}
                >
                  <a>Đăng xuất</a>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </header>
    </div>
  );
}
