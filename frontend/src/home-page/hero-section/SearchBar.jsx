import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  function handleSearchInput(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?city=${city}`);
  }

  return (
    <form
      className="flex items-center mx-auto mt-6 w-full max-w-3xl"
      style={{ margin: "0 auto" }}
      onSubmit={handleSubmit}
    >
      <div className=" bg-white px-3 h-12 flex items-center rounded-l-md">
        <MapPin size={22} color="#2a2828" />
      </div>
      <input
        type="text"
        value={city}
        onChange={handleSearchInput}
        placeholder="Enter your city or area(e.g. Pune, Bangalore)"
        className="bg-white flex-1 h-12 px-3 text-[#2a2828] outline-none"
      />
      <div className="bg-white h-12 flex items-center justify-end rounded-e-md">
        <button className="bg-[#f47b25] h-10 px-4 flex items-center gap-2 font-bold me-1 text-white rounded-md">
          <Search size={18} color="#ffffff" strokeWidth={3} /> Find Tiffin
          Services
        </button>
      </div>
    </form>
  );
};
