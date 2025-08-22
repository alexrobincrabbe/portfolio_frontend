import { ChevronLeft, ChevronRight} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
    open: boolean,
    visible: boolean,
    onToggle: () => void
}
export default function Sidebar(props : SidebarProps) {
    const {open, visible, onToggle } =  props
  return (
    <>
      <aside
        className={`
            z-3
            w-64 h-full
            blue bg-sky-300 border-right-blue shadow-xl
            fixed  top-16 left-0
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"} 
            ${visible ? "xl:translate-x-0" : "xl:-translate-x-full"}
            `}
      >
       
        <div className="relative h-full p-4 space-y-4">
          <nav className="space-y-2">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </nav>

          <button
            onClick={onToggle}
            className="
            hidden
            w-6 h-12
            bg-gray-200 hover:bg-gray-300
            xl:flex items-center justify-center
            absolute top-1/2 right-0  
            translate-x-full -translate-y-1/2
            rounded-r shadow
            "
            title={visible ? "Collapse sidebar" : "Expand sidebar"}
          >
            {visible ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
