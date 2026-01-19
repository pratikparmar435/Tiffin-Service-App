function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-[#f1edeb] shadow-md h-17 sticky top-0 z-2">
        <div className="items-center flex justify-around w-[15%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
            alt="website-logo"
            className="h-12 w-12 ms-3 rounded-4xl"
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
