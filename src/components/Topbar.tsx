import { Menu } from "lucide-react";

type TopbarProps = {
  onToggle: () => void;
};

export default function Topbar(props: TopbarProps) {
  const { onToggle } = props;
  return (
    <div className="
    flex justify-start 
    h-16 w-full
    bg-sky-500
    text-4xl">
      <button className="xl:hidden" onClick={onToggle}>
        <Menu size={48} />
      </button>
      <div className="flex justify-center items-center w-full">Alex Crabbe</div>
    </div>
  );
}
