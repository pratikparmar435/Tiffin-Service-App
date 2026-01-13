function Navbar() {
  return (
    <>
      <div className="flex   justify-between items-center bg-[#f1edeb] shadow-md h-17 sticky top-0 z-2">
        <div className="items-center flex justify-around w-[15%]">
          <img
            src="https://www.kindpng.com/picc/m/145-1453930_breakfast-tiffin-service-in-gandhi-nagar-jammu-tiffin.png"
            alt=""
            className="h-10 w-10 ms-3 rounded-4xl"
          />
          <b className="text-2xl">TiffinService</b>
        </div>
        <div className=" flex w-[50%] justify-evenly items-center">
          <a href="#" className="text-sm">
            How it works
          </a>
          <a href="#" className="text-sm">
            Providers
          </a>
          <a href="#" className="text-sm">
            Plans
          </a>
          <a href="#" className="text-sm">
            Supports
          </a>
          <button className="bg-[#f47b25] rounded-md p-2 m-2 text-white px-7">
            Become Providers
          </button>
          <button className="bg-[#e3dcd7] rounded p-2 px-6">Login</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
