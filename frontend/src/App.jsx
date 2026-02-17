import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerProfile from "./customer-profile-page/CustomerProfile";
import HomePage from "./home-page/HomePage";
import Login from "./login/Login";
import OrderPage from "./order-tifiin-page/OrderPage";
import Register from "./register-page/Register";
import ServiceProviderProfile from "./service-provider-profile-page/ServiceProviderProfile";
import CustomerRegister from "./register-page/step-2/CustomerRegister";
import ProviderRegister from "./register-page/step-2/ProviderRegister";
import MainContent from "./search-page/MainContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home page Route  */}
          <Route path="/" element={<HomePage />} />
          {/* Login Route  */}
          <Route path="/login" element={<Login />} />
          {/* Register Routes  */}
          <Route path="/register" element={<Register />} />
          <Route path="/customer-register" element={<CustomerRegister />} />
          <Route path="/provider-register" element={<ProviderRegister />} />
          {/* Order Tiffin Page Route */}
          <Route path="/order-tiffin" element={<OrderPage />} />
          {/* Profile page routes  */}
          <Route
            path="/provider-profile"
            element={<ServiceProviderProfile />}
          />
          <Route path="/profile" element={<CustomerProfile />} />
          {/* Search Page  */}
          <Route path="/search" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
