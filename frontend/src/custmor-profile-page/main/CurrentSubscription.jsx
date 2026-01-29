import React from 'react'
import "./Imgcss.css"
import { Utensils } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Truck } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
function CurrentSubscription() {
    return (
        <div className='mt-5 border-green-600'>
            <div className='flex'>
                <BadgeCheck />
                <strong className=''>Active Subscription</strong>
            </div>

            <div className='h-54  shadow-xl bg-white  rounded-2xl  mt-4 flex '>
                <div className='id1'></div>
                <div className='flex justify-between w-[75%]'>
                    <div className=' mt-8 ml-6 w-[40%]'>
                        <p className='text-green-400'>Active now</p>
                        <h1 className='font-bold text-2xl text-black'>Monthly Subscriptions</h1>
                        <p className='text-red-950'>Maa's kitchen</p>
                        <div className='mt-6'>
                            <div className='flex '>
                                <Utensils size={16} strokeWidth={0.75} className='mt-1 ' />
                                <p className='ml-1'>Meal:Launch + Dinner</p>
                            </div>
                            <div className='flex '>
                                <Menu size={16} className='mt-1' />
                                <p className='ml-1'>Validity: 1st oct- 30th oct</p>
                            </div>

                        </div>
                    </div>
                    <div className='mt-8 w-[40%] flex flex-col justify-between items-center'>
                        <span className='rounded-3xl px-2 bg-gray-100 text-green-300'>Renewing in 12 Days</span>
                        <div className='flex'>
                            <button className='mb-9  mr-13 rounded bg-amber-600 text-white px-7 py-2 flex'>
                                <Truck color="#000000" className=' mr-2' />Track Delivery

                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentSubscription
