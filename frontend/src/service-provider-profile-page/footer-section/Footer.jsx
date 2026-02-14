import { University, BadgeCheck, Settings, LogOut } from "lucide-react";
const Footer = () => {
  return (
    <div className="mt-10 flex gap-4">
      <div className="flex-1 bg-white rounded-2xl h-30 shadow-sm flex gap-4 items-center px-5">
        <div className="h-12 w-12 rounded-lg p-3 bg-[#f4f4f5]">
          <University color="#10b981" strokeWidth={2.25} />
        </div>
        <div className="flex flex-col ">
          <h5 className="flex gap-1 items-center font-semibold text-lg">
            Bank Details
            <BadgeCheck size={20} color="#10b981" strokeWidth={3} />
          </h5>
          <span className="text-sm text-[#7a7a82]">Verified & Secure</span>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-2xl h-30 shadow-sm flex flex-col gap-4 items-center p-5">
        <div className="flex justify-between w-full">
          <h5 className="font-semibold text-lg">Food Gallery</h5>
          <span className="text-sm font-semibold text-[#f47b25]">UPLOAD</span>
        </div>
        <div className="flex gap-5 w-full">
          <div className="h-12 w-12 rounded-lg p-3 bg-[#f4f4f5]"></div>
          <div className="h-12 w-12 rounded-lg p-3 bg-[#f4f4f5]"></div>
          <div className="h-12 w-12 rounded-lg p-3 bg-[#f4f4f5]"></div>
          <div className="h-12 w-12 rounded-lg p-3 bg-[#f4f4f5]"></div>
          <div className="h-12 w-12 rounded-lg p-3 px-5 bg-[#f4f4f5] text-[#7a7a82]">
            +
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-2xl h-30 shadow-sm flex justify-between items-center px-5">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full p-3 bg-[#f4f4f5]">
            <Settings color="#7a7a82" strokeWidth={3} />
          </div>
          <h5 className="text-[#7a7a82] font-semibold text-md">
            General Settings
          </h5>
        </div>
        <div className="flex gap-2">
          <LogOut color="#f15f5f" strokeWidth={3} />
          <span className="cursor-pointer text-[#f15f5f]">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
