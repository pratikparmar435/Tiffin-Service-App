import OrderHistory from "./order-history/OrderHistory";
import PaymentBilling from "./payment-billing/PaymentBilling";
import Footer from "./profile-footer/Footer";
import SavedAddress from "./saved-addresses/SavedAddress";
import Navbar2 from "./nav-section/Navbar2";
import Content from "./main/Content";
import CurrentSubscription from "./main/CurrentSubscription";

const CustomerProfile = () => {
  return (
    <>
      <Navbar2 />
      <div className="max-w-[75%] m-auto">
        <Content />
        <CurrentSubscription />
        <div className="flex justify-between">
          <OrderHistory />
          <PaymentBilling />
        </div>
        <SavedAddress />
        <Footer />
      </div>
    </>
  );
};

export default CustomerProfile;
