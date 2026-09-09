import React from "react";
import { CloudOff, Sun, Shield } from "lucide-react";

const FeatureItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2.5 items-center">
    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#F5FFE6]">
      {icon}
    </div>
    <p className="text-[#18AB1D] text-[20px] md:text-[22px] text-center font-medium">
      {title}
    </p>
    <p className="font-normal text-[14px] md:text-[16px] text-center text-black max-w-[360px]">
      {description}
    </p>
  </div>
);

const Features = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-items-center gap-10 md:gap-14 px-15.5 md:px-10 lg:px-24 py-12.5 md:py-24 bg-white max-w-6xl mx-auto">
      <FeatureItem
        icon={<CloudOff className="text-[#18AB1D]" size={48} />}
        title="Offline-first mobile platform"
        description="Works via SMS and requires no internet connection, no smartphone needed."
      />
      <FeatureItem
        icon={<Sun className="text-[#18AB1D]" size={48} />}
        title="AI-powered hyperlocal weather forecasting"
        description="Daily weather forecasts and early warning alerts, tuned to each farmer's exact farm location."
      />
      <FeatureItem
        icon={<Shield className="text-[#18AB1D]" size={48} />}
        title="Pest & parasite prediction using AI"
        description="Early pest and parasite prediction using AI"
      />
    </div>
  );
};

export default Features;