import { MapPin } from "lucide-react";
function Con() {
  return (
    <>
      <div className="h-32 rounded-2xl bg-white my-12 flex justify-between items-center p-8 border border-[#F2D4BE]">
        <div className="flex gap-4 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDU_TmMK9xYGD2Vhk7IkYO-9g5VOi4QHG0A&s"
            className="h-20 w-20 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Rahul sharma</h2>
            <span className="text-sm text-[#a57a5a]">
              rahulsharma@gmail.com +91 91111 22345
            </span>
            <span className="text-sm text-[#a57a5a] flex gap-0.5">
              <MapPin size={18} /> Pune, Maharashtra
            </span>
          </div>
        </div>
        <button className="px-5 font-semibold py-2 cursor-pointer rounded-lg border border-[#F2D4BE]">
          Edit profile
        </button>
      </div>
    </>
  );
}

export default Con;
