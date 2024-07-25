"use client";
import Link from "next/link";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <main className="pt-10 px-[10vw] pb-16  flex">
      <div className="flex-1">
        <div className=" mb-8 flex  justify-between items-center">
          <h1 className="text-2xl text- text-slate-800">
            Create your Fake Daraj Account
          </h1>
          <span className="text-sm text-slate-600">
            Already member?{" "}
            <Link href="/login" className="text-sky-600 text-sm">
              Login
            </Link>{" "}
            here
          </span>
        </div>
        <div className="bg-white rounded-lg px-8 py-4">
          <form className="flex justify-between mt-2">
            <div className="w-[24vw]">
              <label className="email mb-4">
                <span className="block text-sm text-slate-700 border-sky">
                  Phone Number
                </span>
                <input
                  type="email"
                  className="border-2 h-10 w-full px-2 mt-1"
                  required
                  placeholder="Please enter your Phone no "
                />
              </label>
              <label className="verify mb-4">
                <span className="block text-sm text-slate-700 border-sky">
                  Verfication code from Whatsapp
                </span>
                <input
                  type="email"
                  className="border-2 h-10 w-full px-2 mt-1"
                  required
                  placeholder="Verification code "
                />
              </label>
              <label className="password relative mb-4">
                <span className="block text-sm  mt-6 text-slate-700 border-sky">
                  Password
                </span>
                <div className="relative w-full mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border-2  h-10 w-full px-2"
                    placeholder="Minimum 6 characters  with number and a letter"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 px-1 flex items-center text-sm leading-5 "
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </button>
                </div>
              </label>
            </div>
            <div className="w-[20vw]">
              <label className="email mb-4">
                <span className="block text-sm text-slate-700 border-sky">
                  Full name
                </span>
                <input
                  type="email"
                  className="border-2 h-10 w-full px-2 mt-1"
                  required
                  placeholder="Enter your first and last name "
                />
              </label>
              <div className="mt-4 flex ">
                <Checkbox
                  {...label}
                  
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
                <label className="text-gray-600">
                  I'd like to receive exclusive offers and promotions via SMS
                </label>
              </div>
              <div className="grid">
                <button className="bg-orange-500 text-white px-4 py-3 mt-4  hover:bg-orange-600 mb-2 uppercase">
                  Sign up
                </button>
                <p className="text-sm text-gray-700 my-2">
                  {" "}
                  By clicking “SIGN UP”, I agree to Daraz's Terms of Use and
                  Privacy Policy
                </p>
                <p className="text-xs my-2 text-gray-700"> or, Signup with</p>
                <div>
                  <button className="bg-blue-800 text-white px-4 mx-2 py-3 mt-2  hover:bg-blue-900">
                    <FacebookIcon /> Facebook
                  </button>
                  <button className="bg-red-600 text-white px-4 py-3 hover:bg-red-700 my-2">
                    <GoogleIcon />+ Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
