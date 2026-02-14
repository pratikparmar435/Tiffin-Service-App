import { useState } from "react";
import { Star, House } from "lucide-react";

function Sidebar() {
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
    }
    const twocheckboxHandler = (e) => {
        settwocheckbox(e.target.checked);
    }
    const threecheckboxHandler = (e) => {
        setthreecheckbox(e.target.checked);
    }
    const vegHandler = (e) => {
        setveg(e.target.checked);
    }
    const nonvegHandler = (e) => {
        setnonveg(e.target.checked);
    }
    const ratinghandler = (e) => {
        setradio(e.target.value);
    }
    const reset = () => {
        setvalue(50);
        setcheckbox(false)
        settwocheckbox(false)
        setthreecheckbox(false)
        setveg(false)
        setnonveg(false)
        setradio("")
    }
    return (
        <div className="h-100 w-[20%]">
            <div className="mt-4 ml-4">
                <div className="flex items-center gap-2 cursor-pointer" onClick={clickHandler}>
                    <span className="text-2xl">☰</span>
                    <b> Filters</b>
                </div>

                {clicked && (
                    <div className="mt-4">
                        <b className="text-[#b18961]">Food Type</b>
                        <br />
                        <input type="checkbox" className="mr-2 accent-green-600 rounded-3xl" checked={veg} onChange={vegHandler} />Pure veg
                        <br />
                        <input type="checkbox" className="mr-2 accent-green-600 " checked={nonveg} onChange={nonvegHandler} />Non veg
                        <br />
                        <br />

                        <b className="text-[#ae8667]">Price Range (Per Meal)</b>
                        <br />
                        <input
                            type="range"
                            min="50"
                            max="250"
                            value={value}
                            onChange={onchangeHandler}
                            className="accent-[#f47519] w-full"
                        />
                        <div className="text-[#ae8667]">Price is: {value}</div>
                        <br />

                        <b className="text-[#b18961]">Meal Type</b>
                        <br />
                        <input type="checkbox" className="mr-2 accent-green-600 " checked={checkbox} onChange={checkboxHandler} />Breakfast
                        <br />
                        <input type="checkbox" className="mr-2 accent-green-600 " checked={twocheckbox} onChange={twocheckboxHandler} />Lunch
                        <br />
                        <input type="checkbox" className="mr-2 accent-green-600" checked={threecheckbox} onChange={threecheckboxHandler} />Dinner
                        <br />
                        <br />

                        <b className="text-[#b18961]">Ratings</b>
                        <br />
                        <div className="flex items-center">
                            <input type="radio" value="4.5" checked={radio === "4.5"} className="mr-2 accent-green-600 " name="btn" onChange={ratinghandler} />
                            4.5
                            <Star className="ml-1" size={16} color="#ebb618" strokeWidth={3} />
                        </div>
                        <div className="flex items-center">
                            <input type="radio" value="3.5" checked={radio === "3.5"} className="mr-2 accent-green-600 " name="btn" onChange={ratinghandler} />
                            3.5
                            <Star className="ml-1" size={16} color="#ebb618" strokeWidth={3} />
                        </div>
                        <div className="flex items-center">
                            <input type="radio" value="5.0" checked={radio === "5.0"} className="mr-2" name="btn" onChange={ratinghandler} />
                            5.0
                            <Star className="ml-1" size={16} color="#ebb618" strokeWidth={3} />
                        </div>
                        <div className="bg-[#ffddc8] mt-3 rounded-3xl py-2 text-center">
                            <button className="font-bold cursor-pointer" onClick={reset}>Reset All Filters</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
