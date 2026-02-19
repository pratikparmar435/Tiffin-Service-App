import { useState, useEffect } from "react";
import axios from "axios";
import CardMapping from "../../search-page/CardMapping";
function ServicesContainer() {
  const [meals, setMeals] = useState([]);

  //Filter Data handling
  const [filter, setFilter] = useState({
    priceRange: "",
    category: "",
    rating: "",
  });

  useEffect(() => {
    axios.post("http://localhost:8080/get4meals").then((res) => {
      setMeals(res.data);
    });
  }, [filter]);

  function handleFilters(e) {
    let { name, value } = e.target;

    setFilter((currVal) => ({
      ...currVal,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/get4meals", filter).then((res) => {
      setMeals(res.data);
    });
  }

  return (
    <div>
      <div className="bg-[#f8ece3] h-130">
        <div className="w-[92%] lg:w-[85%] m-auto pt-10">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left Text */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Find Your Perfect Tiffin
              </h1>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                32 services found in your area
              </p>
            </div>

            {/* Filters */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-4"
            >
              {/* Price */}
              <div className="relative w-full sm:w-48">
                <select
                  name="priceRange"
                  className="w-full appearance-none bg-white border border-gray-300 hover:border-[#f47b25] focus:border-[#f47b25] focus:ring-2 focus:ring-[#f47b25]/30 px-4 h-11 rounded-xl text-sm font-semibold outline-none transition-all shadow-sm"
                  onChange={handleFilters}
                >
                  <option value="" disabled selected>
                    Price Range
                  </option>
                  <option value={100} name="priceRange">
                    ₹100
                  </option>
                  <option value={200} name="priceRange">
                    ₹100-₹200
                  </option>
                  <option value={250} name="priceRange">
                    ₹150-₹250
                  </option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>

              {/* Dietary */}
              <div className="relative w-full sm:w-48">
                <select
                  name="category"
                  onChange={handleFilters}
                  className="w-full appearance-none bg-white border border-gray-300 hover:border-[#f47b25] focus:border-[#f47b25] focus:ring-2 focus:ring-[#f47b25]/30 px-4 h-11 rounded-xl text-sm font-semibold outline-none transition-all shadow-sm"
                >
                  <option value="" disabled selected>
                    Category
                  </option>
                  <option value="veg" name="category">
                    Veg
                  </option>
                  <option value="non-veg" name="category">
                    Non-Veg
                  </option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>

              {/* Rating */}
              <div className="relative w-full sm:w-48">
                <select
                  onChange={handleFilters}
                  name="rating"
                  className="w-full appearance-none bg-white border border-gray-300 hover:border-[#f47b25] focus:border-[#f47b25] focus:ring-2 focus:ring-[#f47b25]/30 px-4 h-11 rounded-xl text-sm font-semibold outline-none transition-all shadow-sm"
                >
                  <option value="" disabled selected>
                    Rating
                  </option>
                  <option value={2.5}>0 - 2.5</option>
                  <option value={4}>2.5 - 4</option>
                  <option value={5}>4 - 5</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>

              {/* Button */}
              <button className="w-full sm:w-auto bg-[#f47b25] hover:bg-[#d9651a] active:scale-95 transition-all text-white px-6 h-11 rounded-xl font-semibold shadow-md">
                Apply Filters
              </button>
            </form>
          </div>
        </div>

        <div className="grid max-w-[85%] m-auto mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal, idx) => (
            <CardMapping meal={meal} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
