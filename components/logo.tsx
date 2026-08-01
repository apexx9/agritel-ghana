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
      className="flex items-center gap-[15px] cursor-pointer"
      onClick={changeRoute}
    >
      <Image src={AgritelLogo} alt="Main agritel logo" className="h-5 w-5" />

      <p className="text-5 font-semibold text-[#F5F5F5]">Agritel</p>
    </div>
  );
};

export default Logo;
