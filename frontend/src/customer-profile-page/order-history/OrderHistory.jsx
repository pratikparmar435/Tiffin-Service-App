import { Order } from "./Order";

const OrderHistory = () => {
  return (
    <div className="w-[63%]">
      <div className="flex items-center justify-between mt-5 mb-3">
        <h1 className="text-xl font-bold">Order History</h1>
        <span className="text-[15px] font-medium text-[#f47f2b] cursor-pointer">
          View All
        </span>
      </div>
      <div className="h-67.5 bg-white border border-[#F2D4BE] rounded-2xl">
        <div className="grid grid-cols-12 bg-[#fcfaf8] h-[25%] rounded-t-2xl p-4 pt-6">
          <span className="col-span-3 text-sm font-semibold text-[#9d6e4b]">
            DATE
          </span>
          <span className="col-span-3 text-sm font-semibold text-[#9d6e4b]">
            PROVIDER
          </span>
          <span className="col-span-3 text-sm font-semibold text-[#9d6e4b]">
            AMOUNT
          </span>
          <span className="col-span-3 text-sm font-semibold text-[#9d6e4b]">
            STATUS
          </span>
        </div>
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
};

export default OrderHistory;
