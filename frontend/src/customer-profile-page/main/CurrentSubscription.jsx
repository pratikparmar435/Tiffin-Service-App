import "./Imgcss.css";
import { Utensils } from "lucide-react";
import { Calendar } from "lucide-react";
import { Truck } from "lucide-react";
import { BadgeCheck } from "lucide-react";
function CurrentSubscription() {
  return (
    <div className="mb-10">
      <div className="flex gap-2 items-center">
        <BadgeCheck />
        <strong className="text-xl">Active Subscription</strong>
      </div>
      <div className="h-54 border border-[#F2D4BE] bg-white rounded-2xl mt-4 flex ">
        <div className="id1 rounded-s-2xl"></div>
        <div className="flex justify-between w-[75%]">
          <div className=" mt-8 ml-6 w-[40%]">
            <p className="text-[#62b966] font-semibold text-base">ACTIVE NOW</p>
            <h1 className="font-bold text-2xl text-black">
              Monthly Subscriptions
            </h1>
            <p className="text-red-950">Maa's kitchen</p>
            <div className="mt-6">
              <div className="flex text-[#a57a5a]">
                <Utensils size={16} strokeWidth={0.75} className="mt-1 " />
                <p className="ml-2">Meal:Launch + Dinner</p>
              </div>
              <div className="flex text-[#a57a5a]">
                <Calendar size={16} className="mt-1" />
                <p className="ml-2">Validity: 1st oct- 30th oct</p>
              </div>
            </div>
          </div>
          <div className="mt-8 w-[40%] flex flex-col justify-between items-end px-8">
            <span className="rounded-3xl px-3 py-1 bg-[#edf7ed] text-[#62b966] text-sm font-semibold">
              Renewing in 12 Days
            </span>
            <div className="flex">
              <button className="mb-9 rounded-lg bg-[#f47b25] cursor-pointer text-white px-6 py-2.5 flex font-bold">
                <Truck color="#fff" className="mr-2" />
                Track Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentSubscription;
