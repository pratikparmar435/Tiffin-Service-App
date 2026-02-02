import React from 'react'
import { Sunrise } from 'lucide-react'
import { SunMoon } from 'lucide-react';
function ActiveDeliveries() {
    const userdata = [{
        name: 'Rahul Sharma',
        Meal: 'Launch',
        Status: "Prepairing",
        color: "bg-[#fef3c7]",
        Action: "View"
    }, {
        name: 'Rakul preet singh',
        Meal: 'Dinner',
        Status: "prepairing",
        color: "bg-[#d1fae5]",
        textcolor: "#d87104",
        Action: "View"
    }, {
        name: 'Raj patel',
        Meal: 'Launch',
        Status: "Scheduled",
        color: "bg-[#f4f4f5]",
        Action: "View"
    }]
    return (
        <div className='h-64 w-full bg-white rounded-xl overflow-hidden shadow-sm'>
            <div className='bg-white h-[24%]'>
                <div className='flex justify-between'>
                    <strong className='ml-5 mt-5'>Active Deliveries</strong>
                    <button className='text-[#f47b30] mt-5 mr-6'>View All Orders</button>
                </div>
            </div>
            <div className="bg-[#fafafa] h-[19%]  font-semibold text-sm flex items-center text-gray-700">
                <span className="w-[35%] ml-5">CUSTOMER NAME</span>
                <span className="w-[20%]">MEAL TYPE</span>
                <span className="w-[20%]">STATUS</span>
                <span className="w-[25%] text-right mr-6">ACTION</span>
            </div>
            <div className="flex flex-col h-[57%] divide-y">
                {
                    userdata.map((user) => (
                        <div className="flex items-center flex-1 text-sm border-b border-gray-200">
                            <span className="w-[35%] ml-5  font-medium">
                                {user.name}
                            </span>
                            <span className="w-[20%] flex gap-2 items-center">
                                {
                                    user.Meal === "Dinner" ? (
                                        <SunMoon color="#808080" strokeWidth={0.75} />
                                    ) : (
                                        <Sunrise color="#808080" strokeWidth={0.75} />
                                    )
                                }
                                {user.Meal}
                            </span>
                            <span className="w-[20%] ">
                                <div className={`rounded-2xl ${user.color} w-fit px-3 py-1 text-md font-semibold`}>
                                    {user.Status}
                                </div>
                            </span>
                            <span className="w-[25%] text-right mr-6 text-[#f47b30]">
                                {user.Action}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActiveDeliveries
