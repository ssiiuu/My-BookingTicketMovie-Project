import { Input, Result } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/quanLyNguoiDungAction";
import { GROUPID } from "../../util/configURL/constanURL";

export default function Register() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUPID,
    },
    validationSchema: Yup.object().shape({
      hoTen: Yup.string().required("* Please input your fullname!"),
      taiKhoan: Yup.string()
        .min(3, "* Minimum 3 characters!")
        .max(30, "* Maximun 30 characters!")
        .required("* Please input your account name!"),
      matKhau: Yup.string()
        .min(6, "* Minimum 6 characters!")
        .required("* Please input your password!"),
      email: Yup.string()
        .email("* Invalid email format!")
        .required("* Please input your email!"),
      soDt: Yup.string()
        .min(10, "* Invalid phone number!")
        .max(11, "* Invalid phone number!")
        .matches(/^[0-9]+$/, "* Invalid phone number!")
        .required("* Please input your phone number!"),
    }),
    onSubmit: (values) => {
      // console.log("values", values);
      dispatch(dangKyAction(values));
    },
  });

  return (
    <form
      onSubmitCapture={formik.handleSubmit}
      className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 "
    >
      <p
        tabIndex={0}
        className="focus:outline-none text-2xl font-extrabold leading-6 text-indigo-700"
      >
        Register for a free account
      </p>

      <div>
        <label
          htmlFor="hoTen"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Full name
        </label>
        <Input
          name="hoTen"
          onChange={formik.handleChange}
          id="hoTen"
          type="text"
          className=" border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        />
        {formik.errors.hoTen && formik.touched.hoTen && (
          <p className="text-red-600">{formik.errors.hoTen}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="taiKhoan"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Account name
        </label>
        <Input
          onChange={formik.handleChange}
          name="taiKhoan"
          id="taiKhoan"
          type="text"
          className=" border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        />
        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
          <p className="text-red-600">{formik.errors.taiKhoan}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Email
        </label>
        <Input
          name="email"
          onChange={formik.handleChange}
          id="email"
          type="email"
          className=" border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-600">{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="soDt"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Phone number
        </label>
        <Input
          name="soDt"
          onChange={formik.handleChange}
          id="soDt"
          type="text"
          className="border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        />
        {formik.errors.soDt && formik.touched.soDt && (
          <p className="text-red-600">{formik.errors.soDt}</p>
        )}
      </div>
      <div className=" w-full">
        <label
          htmlFor="matKhau"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Password
        </label>
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
      <div className="mt-8">
        <button
          type="submit"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
        >
          Create Account
        </button>
        <p
          tabIndex={0}
          className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
        >
          Already have an account?{" "}
          <NavLink
            to={"/login"}
            className="hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-indigo-400 cursor-pointer"
          >
            {" "}
            Login
          </NavLink>
        </p>
      </div>
    </form>
  );
}
