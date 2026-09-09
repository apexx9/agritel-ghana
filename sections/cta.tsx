import React from "react";
import Image from "next/image";
import ctaImage from "@/public/assets/cta.jpg";

const CTA = () => {
  return (
    <div className="flex items-center justify-center px-7.5 md:px-10 py-7.5 md:py-20 bg-[#F5FFE6]">
      <div className="relative rounded-[36px] overflow-hidden flex flex-col items-center justify-center py-12 md:py-20 px-3.5 md:px-16 w-full max-w-[329px] md:max-w-5xl aspect-[329/453] md:aspect-[16/9]">
        <Image
          src={ctaImage}
          alt="Agriculture background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <div className="absolute inset-0 bg-[#17171780]" />

        <div className="relative z-10 flex flex-col items-center gap-5 md:gap-8 text-white">
          <p className="font-semibold text-center text-[24px] md:text-[36px] lg:text-[44px] leading-tight max-w-[820px]">
            Join us in transforming african agriculture with precision farming.
          </p>
          <p className="font-normal text-[15px] md:text-[20px] text-center max-w-[620px]">
            Every farmer deserves access to climate intelligence. We are
            building the digital backbone of Africa&apos;s food security
          </p>
          <button className="bg-[#08650B] hover:bg-[#0a7d10] transition-all duration-300 text-center rounded-[17px] p-2.5 md:px-8 md:py-4 text-[15px] md:text-[18px] cursor-pointer">
            WhatsApp Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;