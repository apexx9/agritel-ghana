import React from "react";

const Solution = () => {
  return (
    <div className="flex flex-col items-start md:items-center gap-3 py-6.5 md:py-16 lg:py-20 px-4.5 md:px-10 bg-[#012F13]">
      <p className="font-normal text-[14px] lg:text-[16px] text-left md:text-center text-white">
        ● Our Solution
      </p>
      <p className="font-bold text-[24px] md:text-[40px] leading-tight text-left md:text-center text-[#18AB1D]">
        One platform. zero barriers
      </p>
      <p className="font-light text-[14px] md:text-[18px] text-left md:text-center text-white italic max-w-[720px]">
        Climate-smart agritech device built offline-first from day one —
        reaching farmers regardless of device or connectivity.
      </p>
    </div>
  );
};

export default Solution;