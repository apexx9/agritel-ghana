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
      <div className="flex flex-col items-start gap-8 md:gap-16 py-6.5 md:py-20 px-4.5 md:px-10 lg:px-16 bg-[#F5FFE6]">
        <div className="flex flex-col items-start md:items-center gap-3 max-w-4xl mx-auto">
          <p className="font-semibold text-[32px] md:text-[48px] leading-tight text-left md:text-center text-black">
            Who we are
          </p>
          <p className="font-light text-[20px] md:text-[24px] leading-relaxed text-left md:text-center text-black">
            Based in Takoradi, in the western part of Ghana Agritel Farming
            Solutions is made up of young people from farming, engineering,
            design, and business backgrounds, working together toward one
            purpose — to close the information gap that leaves African farmers
            exposed to a changing climate. Our mission is to put climate
            intelligence in the hands of every African farmer, by giving
            smallholder farmers offline-first, AI-powered forecasts and agronomy
            guidance that work with the phones and connectivity they already
            have.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-center gap-3 max-w-4xl mx-auto">
          <p className="font-semibold text-[32px] md:text-[48px] leading-tight text-left md:text-center text-black">
            Our Story
          </p>
          <p className="font-light text-[20px] md:text-[24px] leading-relaxed text-left md:text-center text-black">
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