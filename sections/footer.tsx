import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#08650B] px-9.5 py-8.5">
      <nav className="flex flex-col items-start gap-8.75">
        <div className="flex flex-col gap-2">
          <p className="mb-5 font-semibold text-white text-[20px]">Company</p>
          <a
            href="#"
            className="font-normal text-white text-[15px] hover:text-green-200 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
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
      <hr className="border-white opacity-30" />
      <p className="text-[#8F8787] font-normal text-[12px]">
        Copyright 2026.{" "}
        <a className="text-white hover:text-green-200 transition-colors duration-200">
          Agritel Farming Solutions.
        </a>{" "}
        All right reserved
      </p>
    </div>
  );
};

export default Footer;
