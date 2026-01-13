import "../hero-section/HeroSection.css";
import { SubHeroCard } from "./SubHeroCard";
import { MapPin, CalendarDays, Truck } from "lucide-react";

const SubHero = () => {
  const cardContent = [
    {
      cardImg: <MapPin color="#f47b25" size={29} />,
      title: "Search location",
      content: "Find verified home kitchens near your hostel, flat, or office.",
    },
    {
      cardImg: <CalendarDays color="#f47b25" size={29} />,
      title: "Choose plan",
      content:
        "Select a trial, weekly or monthly subscription that fits your budget.",
    },
    {
      cardImg: <Truck color="#f47b25" size={29} />,
      title: "Choose plan",
      content:
        "Enjoy hot, home-cooked meals delivered fresh at your scheduled time.",
    },
  ];
  return (
    <div className="text-center">
      <h1 className="text-2xl">How It Works</h1>
      <div className="flex mx-30">
        {cardContent.map((obj, idx) => {
          return (
            <SubHeroCard
              key={idx}
              cardImg={obj.cardImg}
              title={obj.title}
              content={obj.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SubHero;
