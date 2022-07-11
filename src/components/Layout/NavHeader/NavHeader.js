import React from "react";
import { NavLink } from "react-router-dom";
import UserNavHeader from "./UserNavHeader";

export default function NavHeader() {
  return (
    <div>
      <header className="p-2 dark:bg-coolGray-800 dark:text-coolGray-100 fixed bg-white text-black w-full z-10 ">
        <div className="container flex justify-between items-center  mx-auto">
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
          <ul className="items-stretch space-x-2 lg:flex flex   ">
            <li>
              <NavLink
                activeClassName="border-b-3 border-orange-600"
                to={"/lichChieu"}
                rel="noopener noreferrer"
                href="#"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Lịch Chiếu
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="border-b-3 border-orange-600"
                to={"/cumRap"}
                rel="noopener noreferrer"
                href="#"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1 dark:border-transparent"
              >
                Cụm Rạp
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="border-b-3 border-orange"
                to={"/tinTuc"}
                rel="noopener noreferrer"
                href="#"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1  dark:border-transparent"
              >
                Tin Tức
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="border-b-3 border-orange"
                to={"/ungDung"}
                rel="noopener noreferrer"
                href="#"
                className="text-black text-base font-semibold flex items-center px-4 -mb-1  dark:border-transparent"
              >
                Ứng Dụng
              </NavLink>
            </li>
          </ul>
          <div>
            <UserNavHeader />
          </div>

          <button className="p-4 lg:hidden">
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
        </div>
      </header>
    </div>
  );
}
