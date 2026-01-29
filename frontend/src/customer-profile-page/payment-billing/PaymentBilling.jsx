import { FileText, CreditCard } from "lucide-react";

const PaymentBilling = () => {
  return (
    <div className="w-[32%] mt-5">
      <h3 className="text-xl font-bold mb-3">Payment & Billing</h3>
      <div className="h-67.5 bg-white border border-[#F2D4BE] rounded-2xl p-7">
        <div className="bg-[#fcfaf8] flex justify-between p-2 px-3 items-center">
          <div className="flex gap-4 items-center">
            <CreditCard color="#f47f2b" size={26} />
            <div className="flex flex-col">
              <span className="text-sm text-[#9d6e4b]">Primary Card</span>
              <span className="text-sm font-semibold">**** 4242</span>
            </div>
          </div>
          <span className="text-sm text-[#f47f2b] cursor-pointer">Change</span>
        </div>
        <h6 className="text-sm text-[#9d6e4b] mt-5 mb-3">RECENT INVOICES</h6>
        <div className="flex gap-4 my-5 cursor-pointer">
          <FileText color="#9d6e4b" />
          <span>Invoice Oct 23.pdf</span>
        </div>
        <div className="flex gap-4 my-5 cursor-pointer">
          <FileText color="#9d6e4b" />
          <span>Invoice Oct 23.pdf</span>
        </div>
        <div className="flex gap-4 my-5 cursor-pointer">
          <FileText color="#9d6e4b" />
          <span>Invoice Oct 23.pdf</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentBilling;
