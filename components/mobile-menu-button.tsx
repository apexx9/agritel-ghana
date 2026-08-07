import { Menu } from "lucide-react";
import { RefObject } from "react";

interface MobileMenuButtonProps {
  buttonRef: RefObject<HTMLDivElement | null>;
  onClick: () => void;
}

const MobileMenuButton = ({ buttonRef, onClick }: MobileMenuButtonProps) => {
  return (
    <div
      ref={buttonRef}
      className="rounded-[5px] p-2 bg-[#171717] cursor-pointer hover:bg-[#171717]/80 transition-all ease-in duration-250"
    >
      <Menu className="text-white" onClick={onClick} />
    </div>
  );
};

export default MobileMenuButton;
