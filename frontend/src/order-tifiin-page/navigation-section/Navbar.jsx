import "../orderPage.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky w-full top-0 z-50 shadow-sm flex justify-between px-[7%] py-2 items-center bg-[#fefefd]">
      <div className="flex w-[45%] justify-evenly items-center">
        <h1 className="text-2xl font-semibold">Service Provider Name</h1>
        <Link to={"/"} href="#" className="font-normal">
          Home
        </Link>
        <Link href="#" className="font-normal">
          My Subscription
        </Link>
        <Link href="#" className="font-normal">
          Help
        </Link>
      </div>
      <div className="profile-img cursor-pointer"></div>
    </div>
  );
};

export default Navbar;
