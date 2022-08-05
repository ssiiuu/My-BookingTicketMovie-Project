import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useSelector } from "react-redux";

export default function ThongTinTaiKhoan() {
  const { userInfor } = useSelector((state) => state.quanLyNguoiDungReducer);

  const [inputValue, setInputValue] = useState({
    taiKhoan: userInfor.taiKhoan,
    hoTen: userInfor.hoTen,
    email: userInfor.email,
    soDT: userInfor.soDT,
  });
  const handleChange = (e) => {
    setInputValue((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="profile__tabs__form" style={{ width: 700 }}>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          rules={[
            {
              required: true,
              message: "Please input your account !",
            },
          ]}
        >
          <Input
            name="taiKhoan"
            value={inputValue.taiKhoan}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Họ tên"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
            },
          ]}
        >
          <Input
            name="hoTen"
            value={inputValue.hoTen}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            name="email"
            value={inputValue.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="SDT"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input name="soDT" value={inputValue.soDT} onChange={handleChange} />
        </Form.Item>

        <Form.Item
          className="profile__tabs__btn"
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button
            onClick={() => {
              message.warning("There are some problems with your operation!");
            }}
            type="primary"
            htmlType="submit"
          >
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
