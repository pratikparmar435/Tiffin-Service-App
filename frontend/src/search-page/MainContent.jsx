import CardMapping from "./CardMapping";
import { useLocation } from "react-router-dom";
import FooterSection from "./FooterSection";
import NavbarOfViewMenuCart from "./NavbarOfViewMenuCart";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function MainContent() {
  const [page, setPage] = useState(1);
  const [meals, setMeals] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  useEffect(() => {
    if (!city) return;

    axios
      .get(`http://localhost:8080/search?city=${city}`)
      .then((res) => {
        setMeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarOfViewMenuCart city={city} />

      <div className="max-w-8xl mx-auto flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tiffin Services in {city}
              </h1>
              <p className="text-[#f47519] font-medium">
                {meals.length} providers found
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
              <span className="text-sm text-gray-500">Sort:</span>
              <select className="bg-transparent outline-none font-semibold text-gray-700">
                <option>Popularity</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </header>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal, idx) => (
              <CardMapping meal={meal} key={idx} />
            ))}
            {meals.map((meal, idx) => (
              <CardMapping meal={meal} key={idx} />
            ))}
            {meals.map((meal, idx) => (
              <CardMapping meal={meal} key={idx} />
            ))}
            {meals.map((meal, idx) => (
              <CardMapping meal={meal} key={idx} />
            ))}
            {meals.map((meal, idx) => (
              <CardMapping meal={meal} key={idx} />
            ))}
            {meals.map((meal, idx) => (
              <CardMapping meal={meal} key={idx} />
            ))}
          </div>

          {/* Pagination */}
          <footer className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-[#f47519] hover:text-white transition-all"
              >
                {num}
              </button>
            ))}
          </footer>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}

export default MainContent;
