import { useState } from "react";
import PlanCard from "./PlanCard";

const CardContainer = ({ activePlan }) => {
  const [deliveryDay, setDeliveryDay] = useState("today");
  const [selectedPlan, setSelectedPlan] = useState(null);
  return (
    <div className="flex justify-between">
      <div className="card-container flex gap-5">
        {activePlan === "subscribe" ? (
          <>
            <PlanCard
              id="weekly"
              duration="Weekly"
              price={550}
              description="5 meals total. Perfect for a busy work week."
              selected={selectedPlan === "weekly"}
              onClick={setSelectedPlan}
            />
            <PlanCard
              id="monthly"
              duration="Monthly"
              price={2100}
              description="22 meals total"
              selected={selectedPlan === "monthly"}
              onClick={setSelectedPlan}
            />
          </>
        ) : (
          <PlanCard
            id="one-time"
            duration="One-Time"
            price={120}
            description="No commitment, just one fresh, home-cooked meal."
            selected={selectedPlan === "monthly"}
            onClick={setSelectedPlan}
          />
        )}
      </div>
      <div className="max-w-md bg-white border border-[#F2D4BE] rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Customize Meal</h2>
        <div className="mb-6">
          <p className="text-[#9C5A2E] font-semibold mb-3">MEAL TIMING</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="mealTiming"
                defaultChecked
                className="accent-orange-500"
              />
              <span>Lunch</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="mealTiming"
                className="accent-orange-500"
              />
              <span>Dinner</span>
            </label>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-[#9C5A2E] font-semibold mb-3">DELIVERY DATE</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setDeliveryDay("today");
              }}
              className={`px-6 py-2 rounded-lg font-medium ${deliveryDay === "today" ? "border-2 border-orange-500 text-orange-500" : "border border-[#E6C9B4]"}`}
            >
              Today
            </button>
            <button
              onClick={() => {
                setDeliveryDay("tomorrow");
              }}
              className={`px-6 py-2 rounded-lg font-medium ${deliveryDay === "tomorrow" ? "border-2 border-orange-500 text-orange-500" : "border border-[#E6C9B4]"}`}
            >
              Tomorrow
            </button>
          </div>
          <p className="text-sm text-[#9C5A2E] mt-3">
            *For One-Time Meals, we only offer immediate delivery options.
          </p>
        </div>
        <div>
          <p className="text-[#9C5A2E] font-semibold mb-3">
            SPECIAL INSTRUCTIONS
          </p>
          <textarea
            placeholder="No spicy, less oil, etc."
            className="w-full h-28 p-3 border border-[#E6C9B4] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
