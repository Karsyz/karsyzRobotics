const PPBuyItNowBtn = ({action}) => {
  return (
    <div className="">
      {/* PayPal Form */}
      <form
        action={`https://www.paypal.com/ncp/payment/${action}`}
        method="post"
        target="_blank"
        className="grid justify-items-center gap-2 mt-6"
      >
        <input
          type="submit"
          value="Buy Now"
          className="text-center border-none rounded-md min-w-[11.625rem] px-8 h-[2.625rem] font-bold bg-[#FFD140] text-black font-['Helvetica_Neue',_Arial,_sans-serif] text-base leading-5 cursor-pointer hover:bg-yellow-400 transition"
        />
        <img
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="cards"
          className="mt-2"
        />
        <section className="flex items-center gap-1 text-sm">
          Powered by
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="paypal"
            className="h-[0.875rem]"
          />
        </section>
      </form>
    </div>
  );
};

export default PPBuyItNowBtn;
