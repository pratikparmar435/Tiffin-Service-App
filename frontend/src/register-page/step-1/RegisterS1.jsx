import { Utensils, CookingPot, Check } from "lucide-react";
import "../register.css";
import { act, useState } from "react";
import { Link } from "react-router-dom";

const RegisterS1 = () => {
  const [activeCard, setActiveCard] = useState(null);

  function handleCardSelection(cardName) {
    setActiveCard(cardName);
  }
  return (
    <div className="flex justify-center items-center">
      {/* Heading  */}
      <div className="bg-white p-6 shadow-lg rounded-2xl w-[50%] my-20">
        <div>
          <h1 className="font-bold text-3xl">Create Your Account</h1>
          <span className="text-base text-[#ae876a]">
            Welcome to the community
          </span>
        </div>
        {/* status bar for steps */}
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <span className="text-sm tracking-tighter font-medium">
              Step {activeCard ? 1 : 0} of 2
            </span>
            <span className="text-sm tracking-tighter font-light">
              {activeCard ? 50 : 0}% Complete
            </span>
          </div>
          {/* Status bar  */}
          <div className="status-bar flex my-2">
            <div
              className={`h-2 flex-1 ${activeCard ? "bg-[#f47b25]" : "bg-[#e8d9ce]"} bg-[#e8d9ce] rounded-s-xl`}
            ></div>
            <div className="h-2 flex-1 bg-[#e8d9ce] rounded-e-xl"></div>
          </div>
          <span className="text-sm text-[#ae876a] tracking-tight">
            ACCOUNT TYPE SELECTION
          </span>
        </div>
        {/* Cards Selection */}
        <div className="flex mt-10 gap-6 mb-6">
          {/* Card1  */}
          <div
            className={`flex-1 transition-all duration-200 out-in-ease cursor-pointer ${activeCard === "customer" ? "border-2 border-[#f47b25]" : "border-2 border-[#F2D4BE]"} rounded-2xl p-6`}
            onClick={() => {
              handleCardSelection("customer");
            }}
          >
            <div className="flex justify-between">
              <div className="bg-[#f4ece7] rounded-full p-3.5 w-14 mb-6">
                <Utensils color="#000" strokeWidth={2.5} />
              </div>
              <div
                className={`h-6 w-6 rounded-full p-1 border border-[#F2D4BE]  ${activeCard === "customer" ? "bg-[#f47b25]" : ""}`}
              >
                {activeCard === "customer" ? (
                  <Check color="#ffffff" strokeWidth={2.75} size={15} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <h3 className="font-semibold text-xl">Customer</h3>
            <span className="text-sm text-[#ae876a] tracking-tighter">
              I want to order healthy, home-style meals delivered to my doorstep
              or campus.
            </span>
            <div className="bg-img-customer"></div>
          </div>
          {/* Card2  */}
          <div
            className={`flex-1 transition-all duration-200 out-in-ease cursor-pointer rounded-2xl p-6 ${activeCard === "service-provider" ? "border-2 border-[#f47b25]" : "border-2 border-[#F2D4BE]"}`}
            onClick={() => {
              handleCardSelection("service-provider");
            }}
          >
            <div className="flex justify-between">
              <div className="bg-[#f4ece7] rounded-full p-3.5 w-14 mb-6">
                <CookingPot color="#000" strokeWidth={2.5} />
              </div>
              <div
                className={`h-6 w-6 rounded-full p-1 border border-[#F2D4BE]  ${activeCard === "service-provider" ? "bg-[#f47b25]" : ""}`}
              >
                {activeCard === "service-provider" ? (
                  <Check color="#ffffff" strokeWidth={2.75} size={15} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <h3 className="font-semibold text-xl">Service Provider</h3>
            <span className="text-sm text-[#ae876a] tracking-tighter">
              I want to provide high-quality tiffin services to hungry students
              and professionals.
            </span>
            <div className="bg-img-service-provider"></div>
          </div>
        </div>
        {/* Continue button  */}
        <Link
          to={
            activeCard === "customer"
              ? "/customer-register"
              : "/provider-register"
          }
          className="text-white bg-[#f47b25] inline-block text-center p-4 w-full rounded-xl font-semibold text-lg cursor-pointer"
        >
          Continue
        </Link>
        <p className="text-center mt-6 mb-8 text-[#ae876a] text-sm">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-sm text-[#f47b25] tracking-tighter font-semibold"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterS1;
