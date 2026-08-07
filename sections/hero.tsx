import Logo from "@/components/logo";
import MobileMenuButton from "@/components/mobile-menu-button";
import { RefObject } from "react";

interface HeroProps {
  buttonRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
}

const Hero = ({ buttonRef, onToggle }: HeroProps) => {
  return (
    <section className="flex flex-col w-full h-dvh">
      <div className="flex justify-between px-5 py-2.5 md:py-4 lg:py-6 items-center">
        <Logo />
        <MobileMenuButton buttonRef={buttonRef} onClick={onToggle} />
      </div>
      <div className="hero h-full w-full pb-8 flex flex-col justify-end gap-2.5 items-start px-5">
        <h1 className="font-semibold text-[32px] text-white text-left">
          Smart Farming Intelligence, Built for Every Crop Farmer.
        </h1>
        <p className="font-medium text-[20px] text-[#F5F5F5] text-left">
          Agritel delivers hyperlocal weather forecasts, AI-powered agronomy
          advice, and offline-first technology directly to Africa&apos;s
          smallholder farmers with no smartphone, no internet, no barriers.
        </p>
      </div>
    </section>
  );
};

export default Hero;
