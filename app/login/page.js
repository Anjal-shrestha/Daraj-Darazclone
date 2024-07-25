"use client";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useToast } from "@/components/ui/use-toast";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const rUsername = "Anjal";
  const rPassword = "anjal";
  const { toast } = useToast();

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === rUsername && password === rPassword) {
      localStorage.setItem("token",{ token: true });
      toast({
        title: "Logged in succesfull",
        description: "Enjoy shopping",
      });
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="pt-12 px-[10vw] pb-16 flex">
      <div className="flex-1">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-xl text-slate-700">
            Welcome to Fake Daraz! Daraj Please Login
          </h1>
          <span className="text-sm text-slate-600">
            New member?{" "}
            <a href="/signup" className="text-sky-600 text-sm">
              Register
            </a>{" "}
            here
          </span>
        </div>
        <div className="bg-white rounded-lg p-8">
          <form className="flex justify-between mt-2" onSubmit={handleLogin}>
            <div className="w-[24vw]">
              <label className="email mb-4">
                <span className="block text-sm text-slate-700 border-sky">
                  Username
                </span>
                <input
                  type="text"
                  className="border-2 h-10 w-full px-2 mt-1"
                  required
                  placeholder="Please enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label className="password relative mb-4">
                <span className="block text-sm mt-6 text-slate-700 border-sky">
                  Password
                </span>
                <div className="relative w-full mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border-2 h-10 w-full px-2"
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 px-1 flex items-center text-sm leading-5"
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
              <div className="grid">
                <button
                  className="bg-orange-500 text-white px-4 py-3 hover:bg-orange-600 mb-2 uppercase"
                  type="submit"
                >
                  Login
                </button>
                <p className="text-sm my-0">or, login with</p>
                <button className="bg-blue-800 text-white px-4 py-3 mt-2 hover:bg-blue-900">
                  <FacebookIcon /> Login with Facebook
                </button>
                <button className="bg-red-600 text-white px-4 py-3 hover:bg-red-700 my-4">
                  <GoogleIcon />+ Login with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
