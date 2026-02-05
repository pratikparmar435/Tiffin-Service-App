import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-10 justify-between items-center bg-white shadow-md h-17 sticky top-0 z-2">
      <div className="items-center flex justify-around w-[15%]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
          alt="website-logo"
          className="h-12 w-12 rounded-4xl"
        />
        <b className="text-2xl">TiffinService</b>
      </div>
      <button className="bg-[#e3dcd7] rounded p-2 px-6">Login</button>
    </div>
  );
};

export default Navbar;
