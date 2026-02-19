import React from "react";

function FooterSection() {
  return (
    <>
      <div className="bg-white flex w-full h-40 border border-gray-300">
        <div className=" w-[31%] ml-4 items-center mt-4">
          <div className="flex gap-1 font-bold">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
              className="h-10 w-8 rounded-4xl"
            />
            <small className="mt-2">TiffinHub</small>
          </div>
          <div>
            <small className="text-[#c47a36]">
              Lorem ipsum dolor sit os ratione eaque! Eius itaque<br></br>
              e, iure demo, in cum?hghgh fdffd rrg eius nimda har
            </small>
          </div>
        </div>
        <div className="w-[23%] ml-4 mt-4 flex flex-col gap-y-1.5">
          <b>Company</b>
          <a href="#" className="text-[#c47a36]">
            About Us
          </a>
          <a href="#" className="text-[#c47a36]">
            Contact
          </a>
          <a href="#" className="text-[#c47a36]">
            Careers
          </a>
        </div>
        <div className="w-[23%] ml-4 mt-4 flex flex-col gap-y-1.5">
          <b>For Partners</b>
          <a href="#" className="text-[#c47a36]">
            Register Services
          </a>
          <a href="#" className="text-[#c47a36]">
            Partner Portal
          </a>
          <a href="#" className="text-[#c47a36]">
            Guidelines
          </a>
        </div>
        <div className="w-[23%] ml-4 mt-4 flex flex-col gap-y-1.5">
          <b>Support</b>
          <a href="#" className="text-[#c47a36]">
            Help Center
          </a>
          <a href="#" className="text-[#c47a36]">
            Terms Of Services
          </a>
          <a href="#" className="text-[#c47a36]">
            Privacy Policy
          </a>
        </div>
      </div>
      <small className="flex items-center justify-center mt-6 text-[#c47a36] mb-5">
        @ 2024 TiffinHub. All rights reserved
      </small>
    </>
  );
}

export default FooterSection;
