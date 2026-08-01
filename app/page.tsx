"use client";
import { useState, useRef } from "react";
import Hero from "@/sections/hero";
import Sidebar from "@/components/sidebar";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <main className="w-full min-h-fit flex flex-col justify-between">
      <Hero buttonRef={buttonRef} onToggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} buttonRef={buttonRef} />
    </main>
  );
};

export default Page;
