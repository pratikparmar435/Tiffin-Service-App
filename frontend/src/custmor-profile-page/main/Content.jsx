import React from 'react'

function Con() {
    return (
        <>
            <div className='h-27 rounded shadow-xl bg-white mt-8 flex justify-between items-center'>
                <div className='flex'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDU_TmMK9xYGD2Vhk7IkYO-9g5VOi4QHG0A&s" className='h-20 w-20 ml-3 rounded-full' />
                    <div className='ml-5 mt-2'>
                        <strong>Rahul sharma</strong><br></br>
                        <small>rahulsharma@gmail.com +91 91111 22345</small><br></br>
                        <small>Pune Maharashtra</small><br></br>
                    </div>
                </div>


                <button className='bg-gray-100 shadow  px-4 py-1 mr-6'>Edit profile</button>
            </div>



        </>
    )
}

export default Con
