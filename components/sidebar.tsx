"use client";
import Link from "next/link";
import React from "react";
import { X } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";

interface NavProps {
  id: number;
  title: string;
  href: string;
}

const Nav: NavProps[] = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "/about" },
  { id: 3, title: "Our Solution", href: "/solution" },
  { id: 4, title: "Contact", href: "/contact" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLElement | null>;
}

const Sidebar = ({ isOpen, onClose, buttonRef }: SidebarProps) => {
  const sideBarRef = useClickOutside(onClose, buttonRef);

  if (!isOpen) return null;

  return (
    <div className="bg-black/50 fixed inset-0 z-50">
      <aside
        ref={sideBarRef}
        className="absolute right-0 top-0 h-screen flex flex-col gap-[20px] w-50 bg-white"
      >
        <div className="absolute top-17.5 left-0 right-0 flex justify-between items-center px-[20px] pb-[15px] border-b-[2px] border-[#E5E5E5]">
          <p className="text-black text-[18px] font-medium uppercase">Menu</p>
          <div className="border-[2px] border-[#E5E5E5] rounded-[10px] p-[6px] bg-transparent hover:bg-[#E5E5E5]/40">
            <X onClick={onClose} className="cursor-pointer" />
          </div>
        </div>

        <nav className="flex flex-col gap-5 p-6 pt-[160px]">
          {Nav.map((navItem) => (
            <Link
              key={navItem.id}
              href={navItem.href}
              className="font-normal text-[14px] text-black hover:text-black/70"
              onClick={onClose}
            >
              {navItem.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
