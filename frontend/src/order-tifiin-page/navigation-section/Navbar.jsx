import "../orderPage.css";

const Navbar = () => {
  return (
    <div className="shadow-sm flex justify-between px-[7%] py-2 items-center bg-[#f9f5f3]">
      <div className="flex w-[45%] justify-evenly items-center">
        <h1 className="text-2xl font-semibold">Service Provider Name</h1>
        <span className="font-normal">Home</span>
        <span className="font-normal">My Subscription</span>
        <span className="font-normal">Help</span>
      </div>
      <div className="profile-img"></div>
    </div>
  );
};

export default Navbar;
