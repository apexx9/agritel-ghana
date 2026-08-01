import { Menu } from "lucide-react";

const MobileMenuButton = () => {
  return (
    <div className="rounded-[5px] p-2 bg-[#18AB1D] cursor-pointer hover:bg-[#18AB1D]/80 transition-all ease-in duration-250">
      <Menu className="text-white" />
    </div>
  );
};

export default MobileMenuButton;
