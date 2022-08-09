import React from "react";
import { Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import localStorageServ from "../../../services/locaStorage.service";
import { SET_USER_INFOR } from "../../../redux/type/nguoiDungType";
import { message, Popconfirm } from "antd";
import { history } from "../../../App";

export default function UserLoggedIn() {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });
    localStorageServ.userInfor.remove();
    localStorageServ.accessToken.remove();
    history.push("/login");
  };

  const confirm = (e) => {
    handleLogOut();
  };

  const cancel = (e) => {};

  const menu = (
    <Menu className="p-3">
      {userInfor.maLoaiNguoiDung !== "KhachHang" && (
        <Menu.Item
          key={2}
          className="rounded-sm font-bold hover:bg-green-600 hover:text-white "
        >
          Tới trang Quản trị
        </Menu.Item>
      )}
      <Menu.Item
        onClick={() => {
          history.push(`/profile`);
        }}
        key={1}
        className="rounded-sm hover:bg-green-600 hover:text-white "
      >
        Thông tin cá nhân
      </Menu.Item>
      <Menu.Item
        key={4}
        className="rounded-sm hover:bg-red-600 hover:text-white "
      >
        <Popconfirm
          title="Are you sure you want to sign out?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Đăng xuất</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center">
      <h1 className="mr-2 font-black">{userInfor.hoTen}</h1>
      <Dropdown
        placement="bottomRight"
        arrow
        overlay={menu}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          {userInfor.avatar ? (
            <img
              style={{ width: 50, height: 50, borderRadius: "100%" }}
              src={userInfor.avatar}
              alt="avatar"
            />
          ) : (
            // <img
            //   style={{ width: 50, height: 50, borderRadius: "100%" }}
            //   src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
            //   alt="avatar"
            // />
            <img
              style={{ width: 50, height: 50, borderRadius: "100%" }}
              src="https:/picsum.photos/500"
              alt="avatar"
            />
          )}
        </a>
      </Dropdown>
    </div>
  );
}
