import React from "react";
import { CloudHail } from "lucide-react";

const ClimateItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-2.5 items-center">
    <CloudHail className="text-[#18AB1D]" size={48} />
    <p className="text-black text-[24px] md:text-[28px] text-center font-medium">
      {title}
    </p>
    <p className="font-normal text-[14px] md:text-[16px] text-center text-black max-w-[420px]">
      {description}
    </p>
  </div>
);

const ProblemDescription = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center lg:justify-between items-center gap-6 md:gap-8 lg:gap-16 px-15.5 md:px-10 lg:px-24 py-12.5 md:py-24 lg:py-28 max-w-6xl mx-auto">
      <ClimateItem
        title="Climate Uncertaintity"
        description="Erratic rainfall, droughts, and floods are destroying crops and livelihoods across Sub-Saharan Africa, with yields projected to fall 3–12% by mid-century."
      />
      <ClimateItem
        title="Information Gap"
        description="No localized weather insight or actionable agronomic advice reaches the farmers who need it most leaving planting and harvest timing guesswork"
      />
    </div>
  );
};

export default ProblemDescription;