import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

type SidebarProps = {
  open: boolean;
  visible: boolean;
  onToggle: () => void;
  setPulsing: Dispatch<SetStateAction<boolean>>;
};
export default function Sidebar(props: SidebarProps) {
  const { open, visible, onToggle, setPulsing } = props;
  return (
    <>
      <aside
        className={`
            z-3
            font-mono
            w-64 h-full
            blue bg-background-theme border-r-2 border-blue-300
            fixed  top-10 lg:top-0 left-0
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"} 
            ${visible ? "lg:translate-x-0" : "lg:-translate-x-full"}
            `}
      >
        <div className="relative h-full p-4 space-y-4 text-3xl">
          <nav className="space-y-10 pt-20">
            <NavLink
              onClick={() => setPulsing(true)}
              to="/"
              className="nav-link text-pink-500 block px-3 py-2 rounded hover:bg-gray-100"
            >
              Home
            </NavLink>
            <NavLink
            onClick={() => setPulsing(true)}
              to="/projects"
              className="nav-link text-yellow-500 block px-3 py-2 rounded hover:bg-gray-100"
            >
              Projects
            </NavLink>
            <NavLink
                onClick={() => setPulsing(true)}
              to="/contact"
              className="nav-link text-green-500 block px-3 py-2 rounded hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </nav>

          <button
            onClick={onToggle}
            className={`
                hidden w-6 h-12
                bg-yellow-500 hover:bg-gray-300
                lg:flex items-center justify-center
                absolute top-1/2
                ${visible ? "right-6 rounded-l" : "right-0 rounded-r "}
                translate-x-full -translate-y-1/2
                shadow
            `}
            title={visible ? "Collapse sidebar" : "Expand sidebar"}
          >
            {visible ? (
              <ChevronLeft className="w-4 h-4 text-green-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-pink-500" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
