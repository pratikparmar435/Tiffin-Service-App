import React from "react";
import { Search } from "lucide-react";
import "./css3.css"
function Navbar2() {
    return (
        <div className="h-12 flex bg-white">
            <div className=" w-[65%] flex items-center">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
                        alt="website-logo"
                        className="h-12 w-12 ms-3 rounded-4xl"
                    />
                </div>
                <h1 className="font-bold ml-2">TiffinService</h1>
                <div className="relative w-full max-w-sm ml-18">
                    <Search
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <input
                        type="search"
                        placeholder="Search meals..."
                        className="w-full pl-9 pr-3 py-1 rounded bg-pink-100 focus:outline-none"
                    />
                </div>

            </div>
            <div className=" w-[35%] flex justify-evenly items-center">
                <a href="#">Explore</a>
                <a href="#">Subscription</a>
                <a href="#">Order</a>
                <img src="https://cdn.vectorstock.com/i/500p/71/90/blank-avatar-placeholder-icon-vector-30257190.jpg" className="h-10 w-10" />
            </div>
        </div>

    )
}

export default Navbar2;
