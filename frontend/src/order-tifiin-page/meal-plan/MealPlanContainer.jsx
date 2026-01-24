import { useState } from "react";
import CardContainer from "./CardContainer";
import CardsFooter from "./CardsFooterContainer";
import CardsFooterContainer from "./CardsFooterContainer";

const MealPlanContainer = () => {
  const [activePlan, setActivePlan] = useState("subscribe");
  return (
    <div className="max-w-[75%] m-auto my-15">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl mb-1">Choose Your Meal Plan</h1>
          <span className="text-[#8C4302]">
            Subscription is optional - you can try a single meal today!
          </span>
        </div>
        <div className="relative w-[18%] h-12 bg-white rounded-xl shadow shadow-[#8C4302] flex">
          <div
            className={`absolute top-1 left-1 w-[48%] h-10 bg-[#f47b25] rounded-lg transition-all duration-300 ease-in-out
              ${activePlan === "one-time" ? "translate-x-full" : ""}
            `}
          ></div>
          <button
            onClick={() => {
              setActivePlan("subscribe");
            }}
            className={`z-10 w-1/2 text-sm font-medium transition-colors duration-300
              ${activePlan === "subscribe" ? "text-white" : "text-[#8C4302]"}
            `}
          >
            Subscribe
          </button>
          <button
            onClick={() => {
              setActivePlan("one-time");
            }}
            className={`z-10 w-1/2 text-sm font-medium transition-colors duration-300
              ${activePlan === "one-time" ? "text-white" : "text-[#8C4302]"}
            `}
          >
            One-Time
          </button>
        </div>
      </div>
      <CardContainer activePlan={activePlan} />
      <CardsFooterContainer />
    </div>
  );
};

export default MealPlanContainer;
