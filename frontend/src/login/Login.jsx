import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChanges(event) {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setLoginFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoginFormData({
      email: "",
      password: "",
    });
  }
  return (
    <div>
      {/* Navigation section */}
      <nav className="bg-white shadow-sm flex px-20 justify-between py-3 items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
            alt="website-logo"
            className="h-12 w-12 ms-3 rounded-4xl"
          />
          <h1 className="font-bold text-2xl">Tiffin Service</h1>
        </div>
        <div className="flex gap-6">
          <span>Help</span>
          <span>Contact Us</span>
        </div>
      </nav>
      {/* Main Section  */}
      <div className="flex flex-col justify-center items-center  h-[90vh]">
        {/* Headings  */}
        <div className="text-center mb-6">
          <h1 className="font-semibold text-3xl">Welcome Back</h1>
          <span className="text-sm text-[#6f7e93]">
            Healthy home-style food, delivered daily
          </span>
        </div>
        {/* Main  */}
        <div className=" w-[27%] bg-white flex flex-col p-10 shadow-sm">
          <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={loginFormData.email}
              onChange={handleInputChanges}
              className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#e39964]"
            />
            <label
              htmlFor="password"
              className="text-sm font-semibold mb-1 mt-4"
            >
              Password
            </label>
            <input
              type="password"
              value={loginFormData.password}
              onChange={handleInputChanges}
              placeholder="Enter your password"
              id="password"
              name="password"
              className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#d4a584]"
            />
            <button className="bg-[#f47b25] p-3 cursor-pointer text-white font-semibold mt-8 rounded-lg">
              Login
            </button>
          </form>
          {/* divider */}
          <div className="my-8 text-center flex justify-between items-center">
            <div className="border-t border-t-[#9c6c49] w-[42%] opacity-50"></div>
            <span className="text-sm text-[#9c6c49]">or</span>
            <div className="border-t border-t-[#9c6c49] w-[42%] opacity-50"></div>
          </div>
          {/* Other options  */}
          <button className="p-3 border border-[#F2D4BE] cursor-pointer rounded-lg flex justify-center gap-3 items-center font-semibold text-base">
            <div className="google-img"></div>Continue with Google
          </button>
          <div className="border-t border-t-gray-400 my-10 opacity-50"></div>
          {/* Route to Register Page  */}
          <span className="text-sm text-center">
            Don't have an account?{" "}
            <a href="#" className="text-[#568771] font-bold">
              Create an account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
