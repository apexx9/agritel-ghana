import React from "react";

const Problem = () => {
  return (
    <div className="flex flex-col items-start md:items-center gap-3 py-6.5 md:py-16 lg:py-20 px-4.5 md:px-10 bg-[#F5FFE6]">
      <p className="font-normal text-[14px] lg:text-[16px] text-left md:text-center text-[#18AB1D]">
        ● The Problem
      </p>
      <p className="font-semibold text-[32px] md:text-[48px] leading-tight text-left md:text-center text-black max-w-[760px]">
        The gap isn&apos;t rainfall. It&apos;s information!
      </p>
      <p className="font-light text-[20px] md:text-[24px] text-left md:text-center text-black">
        AI-powered climate smart device built offline-first
      </p>
    </div>
  );
};

export default Problem;