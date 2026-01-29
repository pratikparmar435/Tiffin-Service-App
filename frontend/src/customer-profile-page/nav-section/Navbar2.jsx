import { Search } from "lucide-react";
import "./css3.css";
function Navbar2() {
  return (
    <div className="h-16 px-8 flex shadow sticky top-0 bg-white justify-between items-center">
      <div className=" w-[65%] flex items-center">
        <div className="flex items-center w-[60%]">
          <div className="flex gap-2 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
              alt="website-logo"
              className="h-12 w-12 ms-3 rounded-4xl"
            />
            <h1 className="font-bold">TiffinService</h1>
          </div>
          <div className="relative w-full max-w-sm ml-18">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a57a5a]"
            />
            <input
              type="search"
              placeholder="Search meals..."
              className=" p-10 py-2 w-[80%] rounded bg-[#f4ece7] text-[#664e3b] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="w-[30%] flex justify-evenly font-medium text-md items-center">
        <a href="#">Explore</a>
        <a href="#">Subscription</a>
        <a href="#">Order</a>
        <img
          src="https://cdn.vectorstock.com/i/500p/71/90/blank-avatar-placeholder-icon-vector-30257190.jpg"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar2;
