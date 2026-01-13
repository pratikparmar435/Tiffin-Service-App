import { MapPin, Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <form action="" className="flex ms-75">
      <div className="bg-white w-12 h-13 p-3 pt-4 inline-block rounded-s-md">
        <MapPin size={22} color="#2a2828" />
      </div>
      <input
        type="text"
        placeholder="Enter your city or area(e.g. Pune, Bangalore)"
        className="text-[#2a2828] bg-white w-[40%] h-13 outline-none"
      />
      <div className="bg-white h-13 w-[23%] flex items-center justify-end rounded-e-md">
        <button className="bg-[#f47b25] h-10.5 w-49 px-3 flex font-bold items-center justify-around me-1 rounded-md">
          <Search size={18} color="#ffffff" strokeWidth={3} /> Find Tiffin
          Services
        </button>
      </div>
    </form>
  );
};
