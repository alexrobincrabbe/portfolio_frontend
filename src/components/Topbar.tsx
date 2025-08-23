import { Menu } from "lucide-react";

type TopbarProps = {
  onToggle: () => void;
};

export default function Topbar(props: TopbarProps) {
  const { onToggle } = props;
  return (
    <div className="
    flex items-center justify-start  
     w-full
    bg-background-theme
    bb-blue
    text-4xl lg:text-7xl xl:text-9xl">
      <button className="lg:hidden" onClick={onToggle}>
        <Menu size={32} />
      </button>
      <div className="
      flex justify-center items-center text-center 
      w-full h-10 lg:h-32
      big-shoulders
      bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent
      "
      >Alexander Robin Crabbe
      </div>
    </div>
  );
}
