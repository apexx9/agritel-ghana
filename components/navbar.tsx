// components/Navbar.tsx
"use client";
import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import Logo from "./logo";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top bar – identical styling to Hero's original top bar */}
      <div className="flex justify-between px-[20px] items-center pt-17.5">
        <Logo />
        <div
          ref={buttonRef}
          className="rounded-[5px] p-2 bg-[#18AB1D] cursor-pointer hover:bg-[#18AB1D]/80 transition-all ease-in duration-250"
        >
          <Menu className="text-white" onClick={toggleSidebar} />
        </div>
      </div>

      {/* Sidebar overlay */}
      <Sidebar isOpen={isOpen} onClose={closeSidebar} buttonRef={buttonRef} />
    </>
  );
}
