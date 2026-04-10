import { MapPin, Images } from "lucide-react";

const TiffinDetailsContent = ({ meal }) => {
  return (
    // Removed: max-h-full and justify-evenly (can cause weird spacing)
    // Added: gap-4 for consistent spacing
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl md:text-3xl font-bold capitalize text-gray-800">
        {meal?.provider?.name}
      </h1>

      <span className="text-[#8A3C09] flex gap-2 capitalize items-center font-semibold text-sm md:text-base">
        <MapPin size={18} />
        {meal?.provider?.address}, {meal?.provider?.city}
      </span>

      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {meal?.description}
      </p>

      {/* Image Gallery: flex-wrap ensures it doesn't overflow the screen */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <div className="tiffin-sub-img"></div>
        <div className="tiffin-sub-img"></div>
        <div className="tiffin-sub-img"></div>
        {/* Only show 3 images on very small screens to save space */}
        <div className="tiffin-sub-img hidden sm:block"></div>

        <button className="viewall-btn bg-[#eae4df] hover:bg-[#e2d9d2] transition-colors flex flex-col items-center justify-center cursor-pointer">
          <Images color="#8A3C09" size={20} />
          <span className="text-[#8A3C09] text-[10px] md:text-xs font-bold mt-1">
            VIEW ALL
          </span>
        </button>
      </div>
    </div>
  );
};

export default TiffinDetailsContent;
