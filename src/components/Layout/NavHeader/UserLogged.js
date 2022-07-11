import React from "react";
import { Dropdown, Menu } from "antd";
import { useSelector } from "react-redux";

const menu = (
  <Menu>
    <Menu.Item key={1} className="hover:bg-green-600 hover:text-white ">
      Thông tin cá nhân
    </Menu.Item>
    <Menu.Item key={2} className="hover:bg-green-600 hover:text-white ">
      Tới trang Quản trị
    </Menu.Item>
    <Menu.Item key={4} className="hover:bg-red-600 hover:text-white ">
      Đăng xuất
    </Menu.Item>
  </Menu>
);

export default function UserLogged() {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  return (
    <div className="flex items-center">
      <h1 className="mr-2 font-black">Hello!, {userInfor.hoTen}</h1>
      <Dropdown
        placement="bottomRight"
        arrow
        overlay={menu}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <img
            style={{ width: 50, height: 50, borderRadius: "100%" }}
            src="https://picsum.photos/200"
            alt="avatar"
          />
        </a>
      </Dropdown>
    </div>
  );
}
