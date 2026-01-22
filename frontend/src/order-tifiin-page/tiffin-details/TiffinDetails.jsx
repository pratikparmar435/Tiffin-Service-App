import TiffinDetailsContent from "./TiffinDetailsContent";

const TiffinDetails = () => {
  return (
    <div className="h-[44vh] mt-10 max-w-[75%] m-auto flex gap-10">
      <div className="tiffin-main-img h-full w-350 rounded-2xl"></div>
      <TiffinDetailsContent />
    </div>
  );
};

export default TiffinDetails;
