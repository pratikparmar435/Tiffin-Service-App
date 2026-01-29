import { House } from "lucide-react";

const SavedAddress = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold mb-5">Saved Address</h1>
      <div className="flex gap-10">
        <div className="bg-white p-5 w-[30%] border border-[#F2D4BE] rounded-2xl">
          <div className="flex gap-3 mb-3">
            <House color="#f47f2b" />
            <p>Home</p>
          </div>
          <span className="text-[#604530] text-sm">
            Flat 402, Sunshine Apartments, Kothrud, Pune - 411038
          </span>
        </div>
        <div className="bg-white p-5 w-[30%] border border-[#F2D4BE] rounded-2xl">
          <div className="flex gap-3 mb-3">
            <House color="#f47f2b" />
            <p>Home</p>
          </div>
          <span className="text-[#604530] text-sm">
            Flat 402, Sunshine Apartments, Kothrud, Pune - 411038
          </span>
        </div>
        <div className="bg-white p-5 w-[30%] border border-[#F2D4BE] rounded-2xl">
          <div className="flex gap-3 mb-3">
            <House color="#f47f2b" />
            <p>Home</p>
          </div>
          <span className="text-[#604530] text-sm">
            Flat 402, Sunshine Apartments, Kothrud, Pune - 411038
          </span>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
