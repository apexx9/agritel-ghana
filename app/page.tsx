"use client";
import { useState, useRef } from "react";
import Hero from "@/sections/hero";
import Sidebar from "@/components/sidebar";
import Problem from "@/sections/problem";
import ProblemDescription from "@/sections/problem-description";
import Solution from "@/sections/solution";
import Features from "@/sections/features";
import CTA from "@/sections/cta";
import Footer from "@/sections/footer";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <main className="w-full min-h-dvh flex flex-col justify-between">
      <Hero buttonRef={buttonRef} onToggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} buttonRef={buttonRef} />
      <Problem />
      <ProblemDescription />
      <Solution />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
};

export default Page;
