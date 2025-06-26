import { links } from "../config/navLinks";
import { NavLink } from "react-router-dom";

interface MobileNavLinksProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNavLinks({ open, onClose }: MobileNavLinksProps) {
  if (!open) return null;
  return (
    <>
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                (isActive
                  ? "block text-blue-600 font-semibold"
                  : "block text-gray-700 hover:text-blue-600") + " py-2"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
