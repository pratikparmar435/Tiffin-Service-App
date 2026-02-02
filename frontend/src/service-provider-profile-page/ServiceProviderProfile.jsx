import ActiveDeliveries from "./weekly-menu-management/ActiveDeliveries";
import NewReqMenu from "./weekly-menu-management/NewReqMenu";
import PlanAndRates from "./weekly-menu-management/PlanAndRates";
import WeeklyMenuPart2 from "./weekly-menu-management/WeeklyMenuPart2";
import Navbar from "./navigation-section/Navbar";
import Header from "./header-section/Header";
import Footer from "./footer-section/Footer";

const ServiceProviderProfile = () => {
  return (
    <div className="bg-[#f5f7fa]">
      <Navbar />
      <div className="w-[90%] m-auto">
        <Header />
        <div className="max-w-350 p-10">
          {/* Main 2 Column Layout */}
          <div className="grid grid-cols-[1fr_360px] gap-6">
            {/* LEFT SIDE */}
            <div className="grid grid-rows-[auto_1fr] gap-6">
              {/* Weekly Menu */}
              <WeeklyMenuPart2 />
              {/* Active Deliveries */}
              <ActiveDeliveries />
            </div>
            {/* RIGHT SIDE */}
            <div className="grid grid-rows-[auto_auto] gap-6">
              {/* New Requests */}
              <NewReqMenu />
              {/* Plans & Rates */}
              <PlanAndRates />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
