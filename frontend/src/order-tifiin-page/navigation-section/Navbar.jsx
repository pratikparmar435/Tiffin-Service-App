import "../orderPage.css";

const Navbar = () => {
  return (
    <div className="shadow-sm flex justify-between px-[7%] py-2 items-center bg-[#f9f5f3]">
      <div className="flex w-[45%] justify-evenly items-center">
        <h1 className="text-2xl font-semibold">Service Provider Name</h1>
        <a href="#" className="font-normal">
          Home
        </a>
        <a href="#" className="font-normal">
          My Subscription
        </a>
        <a href="#" className="font-normal">
          Help
        </a>
      </div>
      <div className="profile-img cursor-pointer"></div>
    </div>
  );
};

export default Navbar;
