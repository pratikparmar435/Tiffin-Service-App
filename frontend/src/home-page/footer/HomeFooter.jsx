import { Phone, MessageSquareText } from "lucide-react";

const HomeFooter = () => {
  return (
    <div className="bg-white pt-10">
      <div className="grid grid-cols-12 mx-50 h-62 py-3">
        <div className="col-span-3">
          <div className="flex items-center mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfQ9OGMdZzHWxV-Y4fkFA5ZK22YJo1lbfSw&s"
              alt="website-logo"
              className="h-12 w-12 rounded-4xl"
            />
            <span className="text-2xl font-bold text-[#f47b25] ms-4">
              TiffinService
            </span>
          </div>
          <span className="text-gray-500">
            Bringing the warmth of home-
            <br />
            style cooking to every
            <br />
            student's plate.
          </span>
        </div>
        <div className="col-span-3">
          <h1 className="font-bold text-2xl mb-5">Company</h1>
          <div className="h-full flex flex-col gap-1.5">
            <a href="" className="text-gray-500">
              AboutUs
            </a>
            <a href="" className="text-gray-500">
              Careers
            </a>
            <a href="" className="text-gray-500">
              Blog
            </a>
            <a href="" className="text-gray-500">
              Safety
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="font-bold text-2xl mb-5">Support</h1>
          <div className="h-full flex flex-col gap-1.5">
            <a href="" className="text-gray-500">
              Help Center
            </a>
            <a href="" className="text-gray-500">
              Terms of Services
            </a>
            <a href="" className="text-gray-500">
              Privacy Policy
            </a>
            <a href="" className="text-gray-500">
              Refund Policy
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="font-bold text-2xl mb-5">Connect</h1>
          <div className="flex gap-2">
            <div className="bg-gray-300 h-13 w-13 rounded-[50%] p-1 px-3 text-3xl">
              @
            </div>
            <div className="bg-gray-300 h-13 w-13 rounded-[50%] py-3.5 px-3 text-3xl">
              <Phone />
            </div>
            <div className="bg-gray-300 h-13 w-13 rounded-[50%] py-3.5 px-3.5 text-3xl">
              <MessageSquareText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
