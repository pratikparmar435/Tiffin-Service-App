const PlanCard = (cardDetails) => {
  return (
    <div
      onClick={() => cardDetails.onClick(cardDetails.id)}
      className={`relative cursor-pointer bg-white rounded-xl h-50 w-60 p-7 flex flex-col gap-3 border-2 transition-all
        ${cardDetails.selected ? "border-orange-500" : "border-transparent"}`}
    >
      <div className="font-bold text-2xl flex justify-between">
        <h2>{cardDetails.duration}</h2>
        <h2 className="text-[#f47b25]">&#8377;{cardDetails.price}</h2>
      </div>
      <span className="text-sm text-[#8C4302]">{cardDetails.description}</span>
      <button
        className={`absolute bottom-4 left-10 p-2 px-1 w-40 cursor-pointer m-auto rounded-lg font-semibold ${cardDetails.selected ? "bg-[#f47b25] text-white" : " bg-[#F4EDE8]"}`}
      >
        {cardDetails.selected ? "Selected" : "Select Plan"}
      </button>
    </div>
  );
};

export default PlanCard;
