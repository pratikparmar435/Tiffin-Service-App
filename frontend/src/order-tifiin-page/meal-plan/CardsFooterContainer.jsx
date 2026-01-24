import { Clock, MapPin, ShieldCheck } from "lucide-react";

const CardsFooterContainer = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-evenly">
      <div className="bg-white w-[30%] flex gap-5 items-center p-3 border border-[#F2D4BE] rounded-lg">
        <div className="bg-[#F4EDE8] h-12 w-12 p-3 rounded-md">
          <Clock color="#f47b25" strokeWidth={3} />
        </div>
        <div>
          <h5 className="font-semibold">Delivery Time</h5>
          <span className="text-sm text-[#9C5A2E]">12pm - 2pm</span>
        </div>
      </div>
      <div className="bg-white w-[30%] flex gap-5 items-center p-3 border border-[#F2D4BE] rounded-lg">
        <div className="bg-[#F4EDE8] h-12 w-12 p-3 rounded-md">
          <MapPin color="#f47b25" strokeWidth={3} />
        </div>
        <div>
          <h5 className="font-semibold">Delivery Area</h5>
          <span className="text-sm text-[#9C5A2E]">Within 5km radius</span>
        </div>
      </div>
      <div className="bg-white w-[30%] flex gap-5 items-center p-3 border border-[#F2D4BE] rounded-lg">
        <div className="bg-[#e7f8f2] h-12 w-12 p-3 rounded-md">
          <ShieldCheck color="#05570f" strokeWidth={3} />
        </div>
        <div>
          <h5 className="font-semibold">Hygiene Verified</h5>
          <span className="text-sm text-[#9C5A2E]">FSSAI Certified</span>
        </div>
      </div>
    </div>
  );
};

export default CardsFooterContainer;
