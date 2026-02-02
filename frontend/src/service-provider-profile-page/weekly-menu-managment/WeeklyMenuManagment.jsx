import React from 'react'
import { RefreshCw } from 'lucide-react';

function WeeklyMenuManagment() {
    return (
        <div>
            <div className='flex justify-between mt-3'>
                <strong className='mt-1.5 '>Weekly Menu Manament</strong>
                <div>

                    <button className='bg-[#f47b25] rounded  px-4 py-1 flex gap-2 text-white font-semibold'>
                        <RefreshCw size={16} strokeWidth={1} className='mt-1' />
                        Update Weekly Menu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WeeklyMenuManagment
