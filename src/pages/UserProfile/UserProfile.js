import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan/ThongTinTaiKhoan";
import LichSuDatVe from "./LichSuDatVe/LichSuDatVe";

export default function UserProfile() {
  const dispatch = useDispatch();

  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  const { TabPane } = Tabs;

  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <div className="pt-28">
      <div className="profile lg:grid lg:grid-cols-3">
        <div className="col-span-1 ml-5">
          <div className="flex flex-col  items-center">
            {userInfor.avatar ? (
              <img
                className="profile__img"
                style={{
                  width: 200,
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
                src={userInfor.avatar}
                alt={userInfor.taiKhoan}
              />
            ) : (
              <img
                className="profile__img"
                style={{ width: 200, borderRadius: "100%" }}
                src="https://picsum.photos/500"
                alt={userInfor.taiKhoan}
              />
            )}
            <h1 className="text-3xl font-bold mt-5">{userInfor.hoTen}</h1>
            <p className="text-xl font-semibold">{userInfor.taiKhoan}</p>
          </div>
        </div>
        <div className="profile__tabs col-span-2 mt-10 ml-5">
          <Tabs defaultActiveKey="1" centered onChange={onChange}>
            <TabPane tab="THÔNG TIN TÀI KHOẢN" key="1">
              <ThongTinTaiKhoan />
            </TabPane>
            <TabPane tab="LỊCH SỬ ĐẶT VÉ" key="2">
              <LichSuDatVe />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
