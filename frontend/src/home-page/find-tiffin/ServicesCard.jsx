import React from "react";

function Uicom() {
  return (
    <div className="rounded-2xl bg-white h-89 w-60 shadow-xl">
      <img
        src="https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg"
        alt="slow network"
        className="h-[55%] w-[full] rounded-t-2xl rounded-b-none overflow-hidden"
      ></img>
      <div className="flex justify-between mt-4">
        <b className="ml-6">Mens kitchen </b>
        <p className="mr-4 text-[#f47b25]">*4.8</p>
      </div>
      <p className="text-sm ml-6 mt-3 text-gray-500">
        North indian*2.4 km away
      </p>
      <div className="flex ml-6 mt-4 items-center">
        <b className="text-[#f47b25]">$85 </b>
        <p>/meal</p>
        <button
          type="button"
          className="bg-[#fef2e9] text-[#f47b25] rounded p-1 px-2 ml-1 cursor-pointer"
        >
          view Menu
        </button>
      </div>
    </div>
  );
}

export default Uicom;
