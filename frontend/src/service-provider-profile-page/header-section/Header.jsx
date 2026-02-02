import { Users, Wallet, ClipboardClock, Star } from "lucide-react";

const Header = () => {
  return (
    <div className="mt-10 flex gap-4">
      <div className="bg-white flex-1 min-w-[200px] rounded-2xl shadow p-5">
        <div className="flex justify-between">
          <h6 className="text-[#76767f] font-medium">Active Subscribers</h6>
          <Users color="#10b981" strokeWidth={3} />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="mt-5 font-bold text-3xl">78</h2>
          <span className="mt-5 text-sm text-[#10b981] font-semibold">+5%</span>
        </div>
      </div>
      <div className="bg-white flex-1 min-w-[200px] rounded-2xl shadow p-5">
        <div className="flex justify-between">
          <h6 className="text-[#76767f] font-medium">Monthly Earnings</h6>
          <Wallet color="#f47b25" strokeWidth={3} />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="mt-5 font-bold text-3xl">&#8377;42,500</h2>
          <span className="mt-5 text-sm text-[#10b981] font-semibold">
            +12%
          </span>
        </div>
      </div>
      <div className="bg-white flex-1 min-w-[200px] rounded-2xl shadow p-5">
        <div className="flex justify-between">
          <h6 className="text-[#76767f] font-medium">Pending Orders</h6>
          <ClipboardClock color="#f47b25" strokeWidth={3} />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="mt-5 font-bold text-3xl">12</h2>
          <span className="mt-5 text-sm text-red-500 font-semibold">-2%</span>
        </div>
      </div>
      <div className="bg-white flex-1 min-w-[200px] rounded-2xl shadow p-5">
        <div className="flex justify-between">
          <h6 className="text-[#76767f] font-medium">Avg Rating</h6>
          <Star color="#f47b25" strokeWidth={3} />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="mt-5 font-bold text-3xl">4.8</h2>
          <span className="mt-5 text-sm text-[#10b981] font-semibold">
            +0.1%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
