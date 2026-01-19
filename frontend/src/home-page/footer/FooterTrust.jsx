import { Utensils, HandCoins, ShieldCheck, Radio } from "lucide-react";

function Mid() {
  return (
    <div className="bg-[#f8ece3] px-8 py-10">
      <div className=" flex justify-center max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl mb-12">Why students Trust Us</h1>
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col justify-around items-center">
          <span className="mb-4">
            <Utensils color="#f47b25" strokeWidth={1.75} size={35} />
          </span>
          <b>Fast food</b>
          <small className="text-gray-500">
            Cooked just hour before Deliviery
          </small>
        </div>
        <div className="flex flex-col justify-around items-center">
          <span className="mb-4">
            <HandCoins color="#f47b25" strokeWidth={1.75} size={35} />
          </span>
          <b>Affordable</b>
          <small className="text-gray-500">pocet freindly plans</small>
        </div>
        <div className="flex flex-col justify-around items-center">
          <span className="mb-4">
            <ShieldCheck color="#f47b25" strokeWidth={1.75} size={35} />
          </span>
          <b>varified</b>
          <small className="text-gray-500">
            Hygine&quality checked performed
          </small>
        </div>
        <div className="flex flex-col justify-around items-center">
          <span className="mb-4">
            <Radio color="#f47b25" strokeWidth={1.75} size={35} />
          </span>
          <b>Live tracking</b>
          <small className="text-gray-500">Track your tiffin real-time</small>
        </div>
      </div>
    </div>
  );
}

export default Mid;
