import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const CustomerRegister = () => {
  const [customerFormData, setCustomerFormData] = useState({
    fullname: "",
    number: "",
    location: "",
    email: "",
    password: "",
  });

  const totalFields = Object.keys(customerFormData).length;

  const filledFields = Object.values(customerFormData).filter(
    (value) => value.trim() !== "",
  ).length;

  const stepBase = 50;
  const stepRange = 50;

  const progressPercent =
    stepBase + Math.round((filledFields / totalFields) * stepRange);

  function handleInputs(event) {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setCustomerFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(customerFormData);
    setCustomerFormData({
      fullname: "",
      number: "",
      location: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Heading  */}
      <div>
        <h1 className="font-bold text-3xl mt-8">Create Your Account</h1>
        <a
          href="#"
          className="text-sm flex justify-center items-center text-[#f47b25] tracking-tighter font-semibold"
        >
          <ArrowLeft /> Back to step 1
        </a>
      </div>
      {/* Status bar  */}
      <div className="w-125 rounded-2xl mt-10 bg-white flex flex-col p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h5 className="font-medium tracking-tighter">
            Step 2: Customer Details
          </h5>
          <span className="text-sm tracking-tighter text-[#ae876a] font-light">
            {progressPercent}% Complete
          </span>
        </div>
        <div className="status-bar my-2 w-full h-2 bg-[#e8d9ce] rounded-xl overflow-hidden">
          <div
            className="h-full bg-[#f47b25] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
      {/* Main  */}
      <div className="w-125 rounded-2xl my-8 bg-white flex flex-col p-10 shadow-sm">
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
          <label
            htmlFor="fullname"
            className="text-sm tracking-tighter font-semibold mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="e.g. Kashyap Patel"
            id="fullname"
            name="fullname"
            value={customerFormData.fullname}
            onChange={handleInputs}
            className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#e39964]"
          />
          <div className="mt-4 flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="number"
                className="text-sm tracking-tighter font-semibold mb-1"
              >
                Phone Number
              </label>
              <input
                type="number"
                placeholder="+1(555)000-0000"
                id="number"
                name="number"
                value={customerFormData.number}
                onChange={handleInputs}
                className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#d4a584]"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="location"
                className="text-sm tracking-tighter font-semibold mb-1"
              >
                City / Area
              </label>
              <input
                type="text"
                placeholder="e.g. Sola Bhagwat"
                id="location"
                name="location"
                value={customerFormData.location}
                onChange={handleInputs}
                className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#d4a584]"
              />
            </div>
          </div>
          <label
            htmlFor="email"
            className="text-sm tracking-tighter font-semibold mb-1 mt-4"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="kashyap@example.com"
            id="email"
            name="email"
            value={customerFormData.email}
            onChange={handleInputs}
            className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#d4a584]"
          />
          <label
            htmlFor="password"
            className="text-sm tracking-tighter font-semibold mb-1 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Create password"
            id="password"
            name="password"
            value={customerFormData.password}
            onChange={handleInputs}
            className="bg-white w-full outline-none p-3 border border-[#F2D4BE] rounded-lg text-[#d4a584]"
          />
          <span className="text-sm tracking-tighter mt-8 mb-3 text-center">
            I agree to the{" "}
            <a href="#" className="text-[#317f35] underline">
              Terms & Conditions
            </a>{" "}
            and Private Policy.
          </span>
          <button className="bg-[#f47b25] p-3 cursor-pointer text-white font-semibold rounded-lg">
            Create Account
          </button>
          <p className="text-center mt-6 text-[#ae876a] text-sm">
            Already have an account?{" "}
            <a
              href="#"
              className="text-sm text-[#f47b25] tracking-tighter font-semibold"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegister;
