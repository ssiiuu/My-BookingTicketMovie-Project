import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layHeThongRapAction } from "../../../redux/actions/quanLyRapAction";
import {
  FacebookOutlined,
  TwitterOutlined,
  SkypeOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const dispatch = useDispatch();

  const { heThongRapArr } = useSelector((state) => state.quanLyRapReducer);

  useEffect(() => {
    dispatch(layHeThongRapAction());
  }, []);

  return (
    <footer className="mt-20 py-10 bg-gray-800 ">
      <div className="container  ">
        <div className="grid grid-cols-4">
          <div className="col-span-1 ">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <div className="self-center text-2xl font-semibold">
                <img
                  width={150}
                  src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                  alt="cyber-logo"
                />
              </div>
            </a>
          </div>
          <div className="col-span-1 pt-10 ">
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.cgv.vn/"
                  className="text-gray-400 hover:underline"
                >
                  Thỏa thuận sử dụng
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.cgv.vn/"
                  className="text-gray-400 hover:underline"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.cgv.vn/"
                  className="text-gray-400 hover:underline"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.cgv.vn/"
                  className="text-gray-400 hover:underline"
                >
                  Brand
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.cgv.vn/"
                  className="text-gray-400 hover:underline"
                >
                  Guildlines
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-lg font-medium text-gray-300">Đối tác</p>
            <div className="grid grid-cols-2">
              {heThongRapArr.map((HTR) => {
                return (
                  <div
                    key={HTR.maHeThongRap}
                    className="bg-white mb-5"
                    style={{ width: 50, height: 50, borderRadius: "100%" }}
                  >
                    <img
                      style={{ width: 50, height: 50, borderRadius: "100%" }}
                      src={HTR.logo}
                      alt={HTR.maHeThongRap}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 ">
            <p className="text-lg font-medium text-gray-300 ">ConTact</p>
            <div className="flex items-center text-3xl  space-x-3">
              <a
                className="cursor-pointer text-gray-300"
                href="https://www.cgv.vn/"
                target="_blank"
              >
                <FacebookOutlined />
              </a>
              <a
                className="cursor-pointer text-gray-300"
                href="https://www.cgv.vn/"
                target="_blank"
              >
                <TwitterOutlined />
              </a>
              <a
                className="cursor-pointer text-gray-300"
                href="https://www.cgv.vn/"
                target="_blank"
              >
                <SkypeOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span className="text-gray-300">©2022 All rights reserved</span>
            <a className="text-gray-300" rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a className="text-gray-300" rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
