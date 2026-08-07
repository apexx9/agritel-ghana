"use client";
import AgritelLogo from "../public/assets/agl.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  const changeRoute = () => {
    router.push("/");
  };

  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer"
      onClick={changeRoute}
    >
      <Image src={AgritelLogo} alt="Main agritel logo" className="h-10 w-10" />

      <p className="text-[14px] font-light text-[#171717]">
        Agritel Farming Solutions
      </p>
    </div>
  );
};

export default Logo;
