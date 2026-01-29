import { LogOut } from "lucide-react";

const Footer = () => {
  return (
    <div className="m-auto flex flex-col justify-center items-center mt-20 border-t border-t-gray-300">
      <div className="bg-[#1c130d]  text-white flex py-4 rounded-[30px] px-7 mt-10 gap-3 cursor-pointer">
        <LogOut color="#fff" strokeWidth={3} />
        <span>Logout from Account</span>
      </div>
      <span className="text-sm text-[#8C4603] my-8">
        &copy; 2023 TiffinService Platform. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
