import React from "react";
import Navbar from "./navigation-section/Navbar";
import Header from "./header-section/Header";
import Footer from "./footer-section/Footer";

const ServiceProviderProfile = () => {
  return (
    <div className="bg-[#f5f7fa] h-screen">
      <Navbar />
      <div className="w-[90%] m-auto">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
