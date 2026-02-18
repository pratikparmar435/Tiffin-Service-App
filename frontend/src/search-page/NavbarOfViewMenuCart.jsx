import { Search } from "lucide-react";
import { MapPin } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
function NavbarOfViewMenuCart({ city }) {
  return (
    <div className="bg-white w-full py-2.5 px-5 items-center sticky top-0 shadow-sm justify-between flex">
      <div className="flex h-full items-center gap-2 w-[20%]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
          className="h-12 w-12 rounded-4xl"
        />
        <strong className="text-2xl">TiffinHub</strong>
      </div>
      <div className="w-[60%] flex items-center ">
        <div className="flex rounded-3xl py-3 bg-[#f4ece7] w-full">
          <div className="flex gap-2 items-center">
            <MapPin
              size={24}
              color="#f47519"
              strokeWidth={3}
              className="ml-5"
            />
            <span className="font-semibold text-xl">{city}</span>
          </div>
          <div className="flex gap-4 ">
            <Search color="#ae8667" className="ml-10" />
            <input
              type="text"
              placeholder="Search tiffin services..."
              className="text-[#88512a] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="w-[20%] flex items-center ml-15 gap-5 font-bold">
        <a href="#">My orders</a>
        <a href="#">Help</a>
        <div className="rounded-4xl bg-[#f4ece7] p-2 flex justify-center items-center">
          <Heart size={20} strokeWidth={3} />
        </div>
        <div className="rounded-4xl bg-[#f4ece7] p-2 flex justify-center items-center">
          <User size={20} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}

export default NavbarOfViewMenuCart;
