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
      className="flex items-center gap-[10px] cursor-pointer"
      onClick={changeRoute}
    >
      <Image src={AgritelLogo} alt="Main agritel logo" className="h-10 w-10" />

      <p className="text-[20px] font-semibold text-[#F5F5F5]">Agritel</p>
    </div>
  );
};

export default Logo;
