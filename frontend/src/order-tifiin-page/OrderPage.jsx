import MealPlanContainer from "./meal-plan/MealPlanContainer";
import Navbar from "./navigation-section/Navbar";
import TiffinDetails from "./tiffin-details/TiffinDetails";
import WeeklyMenu from "./weekly-menu/WeeklyMenu";

const OrderPage = () => {
  return (
    <>
      <Navbar />
      <TiffinDetails />
      <WeeklyMenu />
      <MealPlanContainer />
    </>
  );
};

export default OrderPage;
