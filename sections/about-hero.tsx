import Navbar from "@/components/navbar";
import { RefObject } from "react";
import Image from "next/image";

interface HeroProps {
  buttonRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
}

const AboutHero = ({ buttonRef, onToggle }: HeroProps) => {
  return (
    <section className="flex flex-col w-full h-[60dvh]">
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
        <div className="relative z-10 h-full w-full pb-8 md:pb-16 flex flex-col justify-end md:justify-center gap-2.5 items-start px-5 md:px-10 lg:px-16">
          <h1 className="font-semibold text-[32px] md:text-[48px] lg:text-[64px] text-white text-left">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;