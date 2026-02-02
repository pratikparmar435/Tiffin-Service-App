import { useState } from 'react'
import { Pencil } from 'lucide-react';
function WeeklyMenuForMapping({ user, idx, setactive, active }) {
    const [title, settitle] = useState(user.food)
    return (
        <div
            onClick={() => {
                setactive(idx);
            }} className={`cursor-pointer shadow p-4 h-36 w-30 flex rounded-xl bg-white 
      ${idx === active ? "border border-orange-500" : ""}`}  >
            <div className=''>
                <div className='flex'>
                    <div className={`${idx === active ? "text-orange-500" : "text-[#808080]"}`} >{user.day}</div>
                    <div className='ml-8' htmlFor={idx}><Pencil onClick={() => {
                        setactive(idx);
                    }} size={16} className={`${idx === active ? "text-orange-500" : "text-[#808080]"} `} strokeWidth={3}
                    /></div>
                </div>
                <div className=' font-black mt-7'>
                    <textarea id={idx} onChange={(e) => {
                        settitle(e.target.value)
                        console.log(title)
                    }} className='border-none w-20 text-sm outline-none resize-none overflow-hidden font-semibold '
                        value={title}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default WeeklyMenuForMapping
