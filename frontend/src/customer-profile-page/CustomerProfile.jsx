import OrderHistory from "./order-history/OrderHistory";
import PaymentBilling from "./payment-billing/PaymentBilling";
import { Footer } from "./profile-footer/Footer";
import SavedAddress from "./saved-addresses/SavedAddress";

const CustomerProfile = () => {
  return (
    <div className="max-w-[75%] m-auto">
      <div className="flex justify-between">
        <OrderHistory />
        <PaymentBilling />
      </div>
      <SavedAddress />
      <Footer />
    </div>
  );
};

export default CustomerProfile;
