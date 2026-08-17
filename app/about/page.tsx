"use client";
import React, { useState, useRef } from "react";
import AboutHero from "@/sections/about-hero";
import Sidebar from "@/components/sidebar";
import Team from "@/sections/team";
import Footer from "@/sections/footer";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="w-full min-h-dvh flex flex-col justify-between">
      <AboutHero buttonRef={buttonRef} onToggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} buttonRef={buttonRef} />
      <div className="flex flex-col items-start gap-3 py-6.5 px-4.5 bg-[#F5FFE6]">
        <div className="flex flex-col items-start gap-3 py-6.5 px-4.5 bg-[#F5FFE6]">
          <p className="font-semibold text-[32px] text-left text-black">
            Who we are
          </p>
          <p className="font-light text-[20px] text-left text-black">
            AI-powered climate smart device built offline-first
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 py-6.5 px-4.5 bg-[#F5FFE6]">
          <p className="font-semibold text-[32px] text-left text-black">
            Our Story
          </p>
          <p className="font-light text-[20px] text-left text-black">
            AI-powered climate smart device built offline-first
          </p>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
};

export default Page;
