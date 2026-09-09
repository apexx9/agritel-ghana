import Navbar from "@/components/navbar";
import { RefObject } from "react";
import Image from "next/image";

interface HeroProps {
  buttonRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
}

const Hero = ({ buttonRef, onToggle }: HeroProps) => {
  return (
    <section className="flex flex-col w-full h-dvh">
      <Navbar buttonRef={buttonRef} onToggle={onToggle} />
      <div className="relative h-full w-full">
        <Image
          src="/assets/hero-img.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full w-full pb-8 md:pb-16 flex flex-col justify-end md:justify-center gap-2.5 md:gap-4 items-start px-5 md:px-10 lg:px-16">
          <h1 className="font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-tight text-white text-left max-w-[820px]">
            Smart Farming Intelligence, Built for Every Crop Farmer.
          </h1>
          <p className="font-medium text-[20px] md:text-[22px] lg:text-[24px] text-[#F5F5F5] text-left max-w-[640px]">
            Agritel delivers hyperlocal weather forecasts, AI-powered agronomy
            advice, and offline-first technology directly to Africa&apos;s
            smallholder farmers with no smartphone, no internet, no barriers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;