import React from "react";

const ProblemDescription = () => {
  return (
    <div className="flex flex-col px-15.5 py-12.5 gap-6">
      <div className="flex flex-col gap-2.5 items-center">
        {/* Image */}
        <p className="text-black text-[24px] text-center font-medium">
          Climate Uncertaintity
        </p>
        <p className="font-normal text-[14px] text-center text-black">
          Erratic rainfall, droughts, and floods are destroying crops and
          livelihoods across Sub-Saharan Africa, with yields projected to fall
          3–12% by mid-century.
        </p>
      </div>
      <div>
        <p className="text-black text-[24px] text-center font-medium">
          Information Gap
        </p>
        <p className="font-normal text-[14px] text-center text-black">
          No localized weather insight or actionable agronomic advice reaches
          the farmers who need it most leaving planting and harvest timing
          guesswork
        </p>
      </div>
    </div>
  );
};

export default ProblemDescription;
