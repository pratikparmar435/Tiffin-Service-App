import { Utensils } from "lucide-react";
import { useState } from "react";

const WeeklyMenu = ({ menu }) => {
  const [todayFood, setTodayFood] = useState(null);
  const [headingDay, setHeadingDay] = useState("");
  const [activeDay, setActiveDay] = useState(null);

  // ✅ FILTER ONCE (important)
  const days = Object.entries(menu).filter(
    ([day]) => !["_id", "provider", "__v"].includes(day),
  );

  function handleFoodMenu(idx) {
    const [day, meal] = days[idx]; // ✅ use filtered array

    setTodayFood(meal);
    setHeadingDay(day.slice(0, 3)); // ✅ 3 letters
    setActiveDay(idx);
  }

  return (
    <div className="max-w-[75%] m-auto mt-10">
      <h2 className="text-2xl mb-7">Weekly Menu</h2>

      <div className="bg-[#fefefd] rounded-xl shadow-sm">
        <div className="p-1 flex justify-evenly items-center shadow-sm">
          {days.map(([day], idx) => (
            <span
              key={idx}
              onClick={() => handleFoodMenu(idx)}
              className={`cursor-pointer p-2 rounded ${
                activeDay === idx
                  ? "text-[#f47b25] bg-[#fef2e9] capitalize"
                  : "text-[#8C4302] bg-white capitalize"
              }`}
            >
              {day.slice(0, 3)} {/* ✅ FIX */}
            </span>
          ))}
        </div>

        <div className="w-[95%] m-auto p-4 flex gap-5 items-center">
          <div className="h-17.5 w-17.5 rounded-full bg-[#fdefe4] p-4.5">
            <Utensils color="#f47b25" size={32} />
          </div>

          <div>
            <h2 className="text-xl mb-1 capitalize">
              {headingDay || "Select"} Special Thali
            </h2>

            <span className="text-[#8C4302] capitalize">
              {todayFood?.title || "Select a day"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyMenu;
