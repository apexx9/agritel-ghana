import React from "react";

const CTA = () => {
  return (
    <div className="flex items-center h-[40dvh] justify-center px-7.5 py-7.5 bg-[#F5FFE6] ">
      <div className="rounded-[36px] cta h-full w-full flex flex-col items-center justify-end py-12 px-3.5">
        <div className="flex flex-col items-center gap-5">
          <p className="font-semibold text-center text-white text-[24px]">
            Join us in transforming african agriculture with precision farming.
          </p>
          <p className="font-normal text-[15px] text-center text-white">
            Every farmer deserves access to climateintelligence. We are buidling
            the digital backbone of Africa&apos;s food security
          </p>
          <button className="bg-[#08650B] transition-all ease-in duration-250 text-center text-white rounded-[17px] p-2.5">
            WhatsApp Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
