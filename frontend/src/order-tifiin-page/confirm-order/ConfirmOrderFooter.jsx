const ConfirmOrderFooter = ({ selectedPlan }) => {
  return (
    <div className="bg-[#fefefd] py-4 border-t border-[#F2D4BE] z-5">
      <div className="max-w-[75%] m-auto flex items-center justify-between">
        <div>
          <h6 className="text-[12px] text-[#8C4302] font-semibold">
            SELECTED OPTION
          </h6>
          <h2 className="font-bold text-xl capitalize">
            {selectedPlan} Meal{" "}
            <span className="text-[#f47b25]">&#8377;120</span>
          </h2>
        </div>
        <div className="flex items-center w-[30%] justify-between">
          <div>
            <h6 className="text-[12px] text-[#00AE65] font-semibold">
              FRESHLY PREPARED
            </h6>
            <h6 className="text-[12px] text-[#8C4302] font-semibold">
              Delivery by: 1:30 PM today
            </h6>
          </div>
          <button className="p-4 px-5 bg-[#f47b25] text-white rounded-2xl shadow-md shadow-[#f47b25]">
            Proceed to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderFooter;
