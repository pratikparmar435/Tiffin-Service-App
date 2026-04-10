import TiffinDetailsContent from "./TiffinDetailsContent";

const TiffinDetails = ({ meal }) => {
  return (
    // Changed: flex-col for mobile, flex-row for desktop
    // Removed: h-[44vh] to allow content to dictate height
    <div className="mt-10 max-w-[90%] lg:max-w-[75%] m-auto flex flex-col md:flex-row gap-6 lg:gap-10">
      {/* Image Container: responsive height and width */}
      <div className="tiffin-main-img h-75 md:h-auto md:w-1/2 rounded-2xl shadow-sm"></div>
      <div className="md:w-1/2">
        <TiffinDetailsContent meal={meal} />
      </div>
    </div>
  );
};

export default TiffinDetails;
