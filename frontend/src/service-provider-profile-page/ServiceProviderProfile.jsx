import ActiveDeliveries from "./weekly-menu-managment/ActiveDeliveries";
import NewReqMenu from "./weekly-menu-managment/NewReqMenu";
import PlanAndRates from "./weekly-menu-managment/PlanAndRates";
import WeeklyMenuPart2 from "./weekly-menu-managment/WeeklyMenuPart2";

function ServiceProviderProfile() {
    return (
        <div className="bg-[#f5f7fa] min-h-screen">
            <div className="max-w-350 mx-auto p-6">
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
        </div>

    );
}

export default ServiceProviderProfile;
