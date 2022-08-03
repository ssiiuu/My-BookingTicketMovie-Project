import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan/ThongTinTaiKhoan";

export default function UserProfile() {
  const dispatch = useDispatch();

  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="pt-28">
      <div className="grid grid-cols-3">
        <div className="col-span-1 ml-5">
          <div className="flex flex-col  items-center">
            {userInfor.avatar ? (
              <img
                style={{ width: 500, height: 500, borderRadius: "100%" }}
                src={userInfor.avatar}
                alt={userInfor.taiKhoan}
              />
            ) : (
              //   <img
              //     style={{ width: 500, height: 500, borderRadius: "100%" }}
              //     src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              //     alt={userInfor.taiKhoan}
              //   />
              <img
                style={{ width: 500, height: 500, borderRadius: "100%" }}
                src="https://picsum.photos/500"
                alt={userInfor.taiKhoan}
              />
            )}
            <h1 className="text-3xl font-bold mt-5">{userInfor.hoTen}</h1>
            <p className="text-xl font-semibold">{userInfor.taiKhoan}</p>
          </div>
        </div>
        <div className="col-span-2 mt-10 ml-5">
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="THÔNG TIN TÀI KHOẢN" key="1">
              <ThongTinTaiKhoan />
            </TabPane>
            <TabPane tab="LỊCH SỬ ĐẶT VÉ" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
