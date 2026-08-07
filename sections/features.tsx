import React from "react";
import { CloudOff, Sun, Shield } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col px-15.5 py-12.5 gap-6 bg-white">
      <div className="flex flex-col gap-2.5 items-center">
        <CloudOff className="text-[#18AB1D]" size={48} />
        <p className="text-[#18AB1D] text-[20px] text-center font-medium">
          Offline-first mobile platform
        </p>
        <p className="font-normal text-[14px] text-center text-black">
          Works via SMS and requires no internet connection, no smartphone
          needed.
        </p>
      </div>
      <div className="flex flex-col gap-2.5 items-center">
        <Sun className="text-[#18AB1D]" size={48} />
        <p className="text-[#18AB1D] text-[20px] text-center font-medium">
          AI-powered hyperlocal weather forecasting
        </p>
        <p className="font-normal text-[14px] text-center text-black">
          Daily weather forecasts and early warning alerts, tuned to each
          farmer&apos;s exact farm location.
        </p>
      </div>
      <div className="flex flex-col gap-2.5 items-center">
        <Shield className="text-[#18AB1D]" size={48} />
        <p className="text-[#18AB1D] text-[20px] text-center font-medium">
          Pest & parasite prediction using AI
        </p>
        <p className="font-normal text-[14px] text-center text-black">
          Early pest and parasite prediction using AI
        </p>
      </div>
    </div>
  );
};

export default Features;
