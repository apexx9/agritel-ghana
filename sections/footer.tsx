import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#08650B] px-9.5 md:px-10 lg:px-16 py-8.5 md:py-14">
      <nav className="flex flex-col md:flex-row md:justify-between items-start gap-8.75 md:gap-10 max-w-6xl w-full mx-auto">
        <div className="flex flex-col gap-2">
          <p className="mb-5 font-semibold text-white text-[20px]">Company</p>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#team"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            Meet the team
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-5 font-semibold text-white text-[20px]">
            Contact Us
          </p>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            Phone
          </a>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            Email: agritelghana@gmail.com
          </a>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            Location
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-5 font-semibold text-white text-[20px]">
            Social Media
          </p>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            TikTok
          </a>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            Facebook
          </a>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </nav>
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <hr className="border-white opacity-30 md:flex-1" />
        <p className="text-[#8F8787] font-normal text-[12px] md:text-[14px]">
          Copyright 2026.{" "}
          <a className="text-white hover:text-green-200 transition-colors duration-200">
            Agritel Farming Solutions.
          </a>{" "}
          All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;