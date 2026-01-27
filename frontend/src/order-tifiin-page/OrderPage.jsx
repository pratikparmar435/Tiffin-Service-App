import { useState } from "react";
import ConfirmOrderFooter from "./confirm-order/ConfirmOrderFooter";
import MealPlanContainer from "./meal-plan/MealPlanContainer";
import Navbar from "./navigation-section/Navbar";
import TiffinDetails from "./tiffin-details/TiffinDetails";
import WeeklyMenu from "./weekly-menu/WeeklyMenu";

const OrderPage = () => {
  const [activePlan, setActivePlan] = useState("subscribe");
  const [selectedPlan, setSelectedPlan] = useState("weekly");
  return (
    <>
      <Navbar />
      <TiffinDetails />
      <WeeklyMenu />
      <MealPlanContainer
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        activePlan={activePlan}
        setActivePlan={setActivePlan}
      />
      <ConfirmOrderFooter selectedPlan={selectedPlan} />
    </>
  );
};

export default OrderPage;
