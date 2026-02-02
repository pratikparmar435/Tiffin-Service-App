import React from 'react'

function PlanAndRates() {
    return (
        <div className='mt-4'>
            <div className='rounded-xl  bg-[#ffffff] shadow-sm h-50 w-70'>
                <div className='flex justify-between '>
                    <h1 className='font-bold ml-6 mt-4 text-lg'>Plans & Rates</h1>
                    <span className='text-[#f47b30] text-sm mt-5 mr-4'>Editing Pricing</span>
                </div>
                <div className='flex justify-between  border-b-gray-400'>
                    <h1 className='font-bold ml-6 mt-4 text-md text-gray-500'>One-Time-Meal</h1>
                    <span className=' mt-5 mr-4 '>$90</span>
                </div>
                <div className='flex justify-between  border-b-gray-400'>
                    <h1 className='font-bold ml-6 mt-4 text-md text-gray-500'>Weekly Plan</h1>
                    <span className=' mt-5 mr-4 '>$900</span>
                </div>
                <div className='flex justify-between  border-b-gray-400'>
                    <h1 className='font-bold ml-6 mt-4 text-md text-gray-500'>Monthly Plan</h1>
                    <span className=' mt-5 mr-4 '>$9000</span>
                </div>
            </div>
        </div>
    )
}

export default PlanAndRates
