import React from "react";
import Image from "next/image";
import ctaImage from "@/public/assets/cta.jpg"; // adjust import path

const CTA = () => {
  return (
    <div className="flex items-center justify-center px-7.5 py-7.5 bg-[#F5FFE6]">
      {/* Card container with exact design dimensions */}
      <div
        className="relative rounded-[36px] overflow-hidden flex flex-col items-center justify-end py-12 px-3.5 w-full max-w-[329px]"
        style={{ aspectRatio: "329 / 453" }}
      >
        {/* Full‑size image (contain keeps it uncropped) */}
        <Image
          src={ctaImage}
          alt="Agriculture background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#17171780]" />

        {/* Content on top of overlay */}
        <div className="relative z-10 flex flex-col items-center gap-5 text-white">
          <p className="font-semibold text-center text-[24px]">
            Join us in transforming african agriculture with precision farming.
          </p>
          <p className="font-normal text-[15px] text-center">
            Every farmer deserves access to climate intelligence. We are
            building the digital backbone of Africa&apos;s food security
          </p>
          <button className="bg-[#08650B] transition-all duration-300 text-center rounded-[17px] p-2.5">
            WhatsApp Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
