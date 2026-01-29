export const Order = () => {
  return (
    <div className="h-[25%] grid grid-cols-12 border-b border-gray-200  p-4">
      <span className="col-span-3">18 oct 2023</span>
      <span className="col-span-3 font-medium">Maa's Kitchen</span>
      <span className="col-span-3 font-semibold">&#8377;120</span>
      <div className="col-span-3">
        <span className="bg-[#edf7ed] text-[#62b966] rounded-3xl text-sm py-1 px-2">
          Delivered
        </span>
      </div>
    </div>
  );
};
