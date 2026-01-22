import { Utensils } from "lucide-react";
import { useState } from "react";
const WeeklyMenu = () => {
  const [todayFood, setTodayFood] = useState("Select the day...");
  const [headingDay, setHeadingDay] = useState("");
  const [activeDay, setActiveDay] = useState(null);
  const menu = [
    { day: "Mon", food: "This is the food of monday", dayName: "Monday" },
    { day: "Tue", food: "This is the food of tuesday", dayName: "Tuesday" },
    { day: "Wed", food: "This is the food of wednesday", dayName: "Wednesday" },
    { day: "Thu", food: "This is the food of thursday", dayName: "Thursday" },
    { day: "Fri", food: "This is the food of friday", dayName: "Friday" },
    { day: "Sat", food: "This is the food of saturday", dayName: "Saturday" },
    { day: "Sun", food: "This is the food of sunday", dayName: "Sunday" },
  ];

  function handleFoodMenu(idx) {
    setTodayFood(menu[idx].food);
    setHeadingDay(menu[idx].dayName);
    setActiveDay(idx);
  }

  return (
    <div className="max-w-[75%] m-auto mt-10">
      <h2 className="text-2xl mb-7">Weekly Menu</h2>
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-1 flex justify-evenly items-center shadow-sm">
          {menu.map((obj, idx) => {
            return (
              <span
                key={idx}
                onClick={() => {
                  handleFoodMenu(idx);
                }}
                className={`cursor-pointer p-2 rounded ${activeDay === idx ? "text-[#f47b25] bg-[#fef2e9]" : "text-[#8C4302] bg-white"}`}
              >
                {obj.day}
              </span>
            );
          })}
        </div>
        <div className="w-[95%] m-auto p-4 flex gap-5 items-center">
          <div className="h-17.5 w-17.5 rounded-full bg-[#fdefe4] p-4.5">
            <Utensils color="#f47b25" size={32} />
          </div>
          <div>
            <h2 className="text-xl mb-1">{headingDay} Special Thali</h2>
            <span className="text-[#8C4302]">{todayFood}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyMenu;
