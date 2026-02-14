import CardContainer from "./CardContainer";
import CardsFooterContainer from "./CardsFooterContainer";

const MealPlanContainer = ({
  selectedPlan,
  setSelectedPlan,
  activePlan,
  setActivePlan,
}) => {
  return (
    <div className="max-w-[75%] m-auto my-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl mb-1">Choose Your Meal Plan</h1>
          <span className="text-[#8C4302]">
            Subscription is optional - you can try a single meal today!
          </span>
        </div>
        <div className="relative w-[18%] bg-[#fefefd] h-12 bg-#fefefd rounded-xl border border-[#F2D4BE] flex">
          <div
            className={`absolute top-1 left-1 w-[48%] h-10 bg-[#f47b25] rounded-lg transition-all duration-300 ease-in-out
              ${activePlan === "one-time" ? "translate-x-full" : ""}
            `}
          ></div>
          <button
            onClick={() => {
              setActivePlan("subscribe");
              setSelectedPlan("weekly");
            }}
            className={`z-10 w-1/2 text-sm font-medium cursor-pointer transition-colors duration-300
              ${activePlan === "subscribe" ? "text-white" : "text-[#8C4302]"}
            `}
          >
            Subscribe
          </button>
          <button
            onClick={() => {
              setActivePlan("one-time");
              setSelectedPlan("one-time");
            }}
            className={`z-10 w-1/2 text-sm cursor-pointer font-medium transition-colors duration-300
              ${activePlan === "one-time" ? "text-white" : "text-[#8C4302]"}
            `}
          >
            One-Time
          </button>
        </div>
      </div>
      <CardContainer
        activePlan={activePlan}
        setSelectedPlan={setSelectedPlan}
        selectedPlan={selectedPlan}
      />
      <CardsFooterContainer />
    </div>
  );
};

export default MealPlanContainer;
