import Logo from "@/components/logo";
import MobileMenuButton from "@/components/mobile-menu-button";
import { RefObject } from "react";

interface HeroProps {
  buttonRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
}

const Hero = ({ buttonRef, onToggle }: HeroProps) => {
  return (
    <section className="flex flex-col justify-between w-full h-[100dvh] hero pt-17.5 pb-22.5">
      <div className="flex justify-between px-[20px] items-center">
        <Logo />
        <MobileMenuButton buttonRef={buttonRef} onClick={onToggle} />
      </div>
      <div className="flex flex-col gap-[10px] items-start w-[90%] px-[20px]">
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
