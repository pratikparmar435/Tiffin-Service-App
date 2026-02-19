import { useState } from "react";
import { Star, House, Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setvalue] = useState(50);
  const [clicked, setclicked] = useState(true);
  const [checkbox, setcheckbox] = useState(false);
  const [twocheckbox, settwocheckbox] = useState(false);
  const [threecheckbox, setthreecheckbox] = useState(false);
  const [veg, setveg] = useState(false);
  const [nonveg, setnonveg] = useState(false);
  const [radio, setradio] = useState("");
  const onchangeHandler = (e) => {
    setvalue(e.target.value);
  };
  const clickHandler = () => {
    setclicked(!clicked);
  };
  const checkboxHandler = (e) => {
    setcheckbox(e.target.checked);
  };
  const twocheckboxHandler = (e) => {
    settwocheckbox(e.target.checked);
  };
  const threecheckboxHandler = (e) => {
    setthreecheckbox(e.target.checked);
  };
  const vegHandler = (e) => {
    setveg(e.target.checked);
  };
  const nonvegHandler = (e) => {
    setnonveg(e.target.checked);
  };
  const ratinghandler = (e) => {
    setradio(e.target.value);
  };
  const reset = () => {
    setvalue(50);
    setcheckbox(false);
    settwocheckbox(false);
    setthreecheckbox(false);
    setveg(false);
    setnonveg(false);
    setradio("");
  };
  return (
    <aside
      className={`${isOpen ? "w-full md:w-64" : "w-full md:w-16"} transition-all duration-300 bg-white border-r border-gray-200 p-4`}
    >
      <div
        className="flex items-center justify-between mb-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Menu className="text-[#f47519]" />
          {isOpen && <b className="text-gray-800">Filters</b>}
        </div>
        {isOpen && <X size={18} className="md:hidden" />}
      </div>

      {isOpen && (
        <div className="space-y-6">
          <section>
            <b className="text-sm uppercase tracking-wider text-gray-500">
              Food Type
            </b>
            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#f47519]" />
                <span className="text-gray-700">Pure Veg</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#f47519]" />
                <span className="text-gray-700">Non-Veg</span>
              </label>
            </div>
          </section>

          <section>
            <b className="text-sm uppercase tracking-wider text-gray-500">
              Price (₹{value})
            </b>
            <input
              type="range"
              min="50"
              max="250"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
              className="w-full mt-2 accent-[#f47519]"
            />
          </section>

          <button
            onClick={reset}
            className="w-full py-2 bg-orange-50 text-[#f47519] font-bold rounded-lg hover:bg-orange-100 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
