import { HeroContent } from "./HeroContent";
import "./HeroSection.css";
import { SearchBar } from "./SearchBar";

const BackgroundImg = () => {
  return (
    <div className="hero-img shadow-xl">
      <div className="black-overlay text-white text-center shadow-xl">
        <div className="hero-content flex flex-col justify-center h-full">
          <HeroContent />
          <SearchBar />
          <span className="font-light mt-2">
            Are you a home cook?{" "}
            <a href="#" className="text-[#f47b25] font-medium">
              Become a Service Provider
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;
