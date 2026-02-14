import CardMapping from './CardMapping'

import FooterSection from './FooterSection'
import NavbarOfViewMenuCart from './NavbarOfViewMenuCart'
import Sidebar from './Sidebar'
import React, { useState } from 'react'

function MainContent() {
    const [page, setPage] = useState(1)
    const Arr = [{
        img: "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Ghar ka swad",
        rating: 4.5,
        icon: "star",
        time: "⏳Launch: 12PM-2PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹80/meal",
        number: 2000,
        button: "View Menu  ›"

    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvlxtQfYRJv7rLVaiSpiK6SRINhWUGxFCew&s",
        title: "Mom's Kitchen",
        rating: 4.2,
        icon: "star",
        time: "⏳Launch: 1PM-3AM",
        t2: "STARTING FROM",
        t3: "WEEKLY",
        rupee: "₹800/meal",
        number: 3000,
        button: "View Menu  ›"

    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZf1GDhM9--1KDQ1F7FBasFbqgnTfsBAGozA&s",
        title: "Healthy Bites",
        rating: 2.5,
        icon: "star",
        time: "⏳Launch: 10PM-2PM",
        t2: "STARTING FROM",
        t3: "Yearly",
        rupee: "₹70/meal",
        number: 4000,
        button: "View Menu  ›"

    }, {
        img: "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        title: "Spice Route",
        rating: 4.5,
        icon: "star",
        time: "⏳Launch: 12PM-2PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹80/meal",
        number: 2000,
        button: "View Menu ›"

    }, {
        img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
        title: "South Tadka",
        rating: 5.00,
        icon: "star",
        time: "⏳Launch: 12PM-2:30PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹60/meal",
        number: 1000,
        button: "View Menu  ›"

    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQynKAtD1jF4MElJGeQiXp9IxgDkrY8Z7tKA&s",
        title: "Daily Fresh",
        rating: 4.5,
        icon: "star",
        time: "⏳Launch: 12:30PM-2PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹95/meal",
        number: 5000,
        button: "View Menu ›"

    },
    ]
    const Arr2 = [{
        img: "https://miro.medium.com/v2/resize:fit:1400/0*0zGCVuvlLlbfEeJM.",
        title: "Taste of Real",
        rating: 4.0,
        icon: "star",
        time: "⏳Launch: 2PM-12PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹70/meal",
        number: 12000,
        button: "View Menu  ›"

    }, {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/49/bc/84/api-api-cafe.jpg?w=1200&h=1200&s=1",
        title: "Trisha's Kitchen",
        rating: 3.2,
        icon: "star",
        time: "⏳Launch: 1PM-7AM",
        t2: "STARTING FROM",
        t3: "WEEKLY",
        rupee: "₹8000/meal",
        number: 3000,
        button: "View Menu  ›"

    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0dHIzSTcLXOANSqFqsW1dS-wUdi2i2J2Ng&s",
        title: "Healthy Bites",
        rating: 2.8,
        icon: "star",
        time: "⏳Launch: 10PM-2AM",
        t2: "STARTING FROM",
        t3: "Yearly",
        rupee: "₹70/meal",
        number: 4000,
        button: "View Menu  ›"

    }, {
        img: "https://cdn.prod.website-files.com/64e392bed89d850c3f9dec8e/68821bc8e2057834072dc402_009%20balanced_meal_plate.jpeg",
        title: "Adani's Dhaba",
        rating: 1.5,
        icon: "star",
        time: "⏳Launch: 3PM-1AM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹90/meal",
        number: 11000,
        button: "View Menu ›"

    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3071_aBnZLnCsQp4SJ_G1j5w0XOs7gfZog&s",
        title: "Punjabi Tadka",
        rating: 5.0,
        icon: "star",
        time: "⏳Launch: 12PM-2:15PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹650/meal",
        number: 100,
        button: "View Menu  ›"

    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPt6KdSEVdeQLLkceuKhGGKuLZaSY2KTOUA&s",
        title: "Ruby's Restorent",
        rating: 1.5,
        icon: "star",
        time: "⏳Launch: 12:30PM-2PM",
        t2: "STARTING FROM",
        t3: "MONTHLY",
        rupee: "₹95/meal",
        number: 5000,
        button: "View Menu ›"

    },
    ]
    return (
        <div>
            <NavbarOfViewMenuCart></NavbarOfViewMenuCart>

            <div className='flex'>
                <Sidebar></Sidebar>
                <div className='w-full'>
                    <div className='flex justify-between w-full mt-4 mr-4'>
                        <div className='gap-5 ml-13'>
                            <strong className='text-2xl'>Tiffin Services In Ahemdabad</strong><br />
                            <small className='text-[#f47519]'>
                                124 providers available for your location
                            </small>
                        </div>
                        <div className='flex gap-4'>
                            <small className='mt-2 text-[#ae8667]'>Sort by:</small>
                            <select name="sort" id="sort"
                                className='h-8 w-45 rounded-2xl py-1 px-3 bg-[#f4ece7]'>
                                <option value="popularity">Popularity</option>
                                <option value="popularity">Affordable</option>
                            </select>
                        </div>
                    </div>
                    {page === 1 && <CardMapping data={Arr} />}
                    {page === 2 && <CardMapping data={Arr2} />}

                </div>

            </div>
            <div className='flex justify-center gap-4 mt-5 ml-35 '>
                <button onClick={() => setPage(1)} className='bg-[#f8f8f5] h-10 cursor-pointer border  border-gray-300 w-10 rounded-xl hover:bg-[#f47519]'>1</button>
                <button
                    onClick={() => setPage(2)} className='bg-[#f8f8f5] h-10 cursor-pointer border border-gray-300 w-10 rounded-xl hover:bg-[#f47519]'>2</button>
            </div>
            <div className='mt-5'>
                <FooterSection></FooterSection>
            </div>
        </div>

    )
}

export default MainContent