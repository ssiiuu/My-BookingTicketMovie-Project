import { Input } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/quanLyNguoiDungAction";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
        .min(3, "* Minimum 3 characters!")
        .max(30, "* Maximun 30 characters!")
        .required("* Please input your account name!"),
      matKhau: Yup.string()
        .min(6, "* Minimum 6 characters!")
        .required("* Please input your password!"),
    }),
    onSubmit: (values) => {
      // console.log("values", values);
      dispatch(dangNhapAction(values));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white shadow rounded lg:w-1/3  md:w-1/2  p-10 "
    >
      <p
        tabIndex={0}
        className="focus:outline-none text-2xl font-extrabold leading-6 text-indigo-700"
      >
        Login to your account
      </p>

      <div>
        <label
          htmlFor="taiKhoan"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Account name
        </label>
        <Input
          name="taiKhoan"
          onChange={formik.handleChange}
          id="taiKhoan"
          aria-labelledby="taiKhoan"
          type="text"
          className=" border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        />
        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
          <p className="text-red-600">{formik.errors.taiKhoan}</p>
        )}
      </div>
      <div className="w-full">
        <label
          htmlFor="matKhau"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Password
        </label>
        <div>
          <Input.Password
            name="matKhau"
            onChange={formik.handleChange}
            id="matKhau"
            type="password"
            className="border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
          {formik.errors.matKhau && formik.touched.matKhau && (
            <p className="text-red-600">{formik.errors.matKhau}</p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          role="button"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
        >
          Login
        </button>
      </div>
      <p
        tabIndex={0}
        className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
      >
        Dont have account?{" "}
        <NavLink
          to={"/register"}
          className="hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-indigo-400 cursor-pointer"
        >
          {" "}
          Sign up here
        </NavLink>
      </p>
    </form>
  );
}
