import { UtensilsCrossed, Pen } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [currState, setCurrState] = useState("closed");
  return (
    <div className="bg-white sticky top-0 shadow py-3 px-8 flex w-full justify-between items-center">
      <div className="flex w-[20%] gap-3">
        <div className="h-11 w-11 rounded-md bg-[#f47b25] p-2.5">
          <UtensilsCrossed strokeWidth={3} color="#fff" />
        </div>
        <div className="leading-none">
          <h3 className="text-xl font-semibold">Service Provider Name</h3>
          <span className="text-sm text-[#6e6e77]">Provider address</span>
        </div>
      </div>
      <div className="flex w-[70%] gap-10 justify-end">
        <div className="relative w-[15%] bg-[#f4f4f5] h-12 rounded-xl flex">
          <div
            className={`absolute top-1 left-1 w-[48%] h-10 bg-[#10b981] rounded-lg transition-all duration-300 ease-in-out
              ${currState === "closed" ? "translate-x-full bg-red-500" : ""}
            `}
          ></div>
          <button
            onClick={() => {
              setCurrState("open");
            }}
            className={`z-10 cursor-pointer w-1/2 text-sm font-medium transition-colors duration-300
              ${currState === "open" ? "text-white" : "text-[#76767f]"}
            `}
          >
            Open
          </button>
          <button
            onClick={() => {
              setCurrState("closed");
            }}
            className={`z-10 w-1/2 cursor-pointer text-sm font-medium transition-colors duration-300
              ${currState === "closed" ? "text-white" : "text-[#76767f]"}
            `}
          >
            Closed
          </button>
        </div>
        <button className="px-3 font-semibold py-3 cursor-pointer rounded-lg border border-[#c8c8cf] flex gap-2">
          <Pen strokeWidth={3} /> Edit profile
        </button>
        <img
          src="https://cdn.vectorstock.com/i/500p/71/90/blank-avatar-placeholder-icon-vector-30257190.jpg"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
