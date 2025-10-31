import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type TopbarProps = {
  className: string;
  onToggle: () => void;
  pulsing: boolean;
  setPulsing: Dispatch<SetStateAction<boolean>>;
};

export default function Topbar(props: TopbarProps) {
  const { className, onToggle, pulsing, setPulsing } = props;

  return (
    <div
      className={`
        ${className}
        transition-all duration-300 ease-in-out 
        flex items-center justify-start  
        w-full
        bg-background-theme
        bb-blue
        text-4xl lg:text-7xl xl:text-8xl xxl:text-9xl`}
    >
      <button className="lg:hidden" onClick={onToggle}>
        <Menu size={32} />
      </button>
      <div
        className={`
      flex justify-center items-center text-center 
      w-full h-10 lg:h-32
      big-shoulders
      ${pulsing ? "text-rgb rgb-pulse" : "text-rgb"}
      `}
        onAnimationEnd={() => setPulsing(false)}
      >
        Alexander Robin Crabbe
      </div>
    </div>
  );
}
