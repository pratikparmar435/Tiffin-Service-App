import React from 'react'
import { Search } from "lucide-react";
import { MapPin } from 'lucide-react';
import { Heart } from 'lucide-react';
import { User } from 'lucide-react';
function NavbarOfViewMenuCart() {
    return (
        <div className='bg-white w-full h-15 justify-between flex' >
            <div className='flex h-full items-center gap-2 w-[20%]'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s" className='h-8 w-8 ml-5 rounded-4xl' />
                <strong>TiffinHub</strong>
            </div>
            <div className='w-[60%] flex items-center '>
                <div className='flex rounded-3xl  bg-[#f4ece7] w-full py-1.5 '>
                    <div className='flex gap-2 items-center'>
                        <MapPin size={24} color="#f47519" strokeWidth={3} className='ml-5' />
                        <strong>Gota,Ahemdabad</strong>
                    </div>
                    <div className='flex gap-4 '>
                        <Search color="#ae8667" className='ml-10' />
                        <input type="text" placeholder='Search tiffin services...' className='text-[#88512a] border-none' />
                    </div>
                </div>
            </div>
            <div className=' w-[20%] flex items-center ml-15'>
                <div className='flex gap-5 font-bold '>
                    <a href="#">My orders</a>
                    <a href="#">Help</a>
                    <div className='rounded-4xl bg-[#f4ece7] h-7 w-7 flex justify-center items-center'><Heart size={20} strokeWidth={3} /></div>
                    <div className='rounded-4xl bg-[#f4ece7] h-7 w-7 flex justify-center items-center'><User size={20} strokeWidth={3} /></div>
                </div>
            </div>

        </div>
    )
}

export default NavbarOfViewMenuCart
