import { useState, useEffect } from "react";
import ConfirmOrderFooter from "./confirm-order/ConfirmOrderFooter";
import MealPlanContainer from "./meal-plan/MealPlanContainer";
import Navbar from "./navigation-section/Navbar";
import TiffinDetails from "./tiffin-details/TiffinDetails";
import WeeklyMenu from "./weekly-menu/WeeklyMenu";
import axios from "axios";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const [activePlan, setActivePlan] = useState("subscribe");
  const [selectedPlan, setSelectedPlan] = useState("weekly");
  const [meal, setMeal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/order-tiffin/${id}`).then((res) => {
      setMeal(res.data);
    });
  }, []);

  return (
    <>
      <Navbar meal={meal} />
      <TiffinDetails meal={meal} />
      <WeeklyMenu meal={meal} />
      <MealPlanContainer
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        activePlan={activePlan}
        setActivePlan={setActivePlan}
        meal={meal}
      />
      <ConfirmOrderFooter meal={meal} selectedPlan={selectedPlan} />
    </>
  );
};

export default OrderPage;
