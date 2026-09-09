import Logo from "@/components/logo";
import MobileMenuButton from "@/components/mobile-menu-button";
import Link from "next/link";
import { RefObject } from "react";

interface NavItem {
  id: number;
  title: string;
  href: string;
}

const Nav: NavItem[] = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "/about" },
  { id: 3, title: "Our Solution", href: "/solution" },
  { id: 4, title: "Contact", href: "/contact" },
];

interface NavbarProps {
  buttonRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
}

const Navbar = ({ buttonRef, onToggle }: NavbarProps) => {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 lg:px-16 py-2.5 md:py-4 lg:py-5">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {Nav.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="font-medium text-[14px] lg:text-[16px] text-[#171717] hover:text-[#18AB1D] transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <MobileMenuButton buttonRef={buttonRef} onClick={onToggle} />
      </div>
    </header>
  );
};

export default Navbar;