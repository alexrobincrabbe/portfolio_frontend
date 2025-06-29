import { NavLink } from "react-router-dom";
import { links } from "../config/navLinks";

export default function DesktopNavLinks() {
  return (
    <>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? "text-gray-700 font-semibold"
              : "text-white hover:text-gray-700"
          }
        >
          {label}
        </NavLink>
      ))}
    </>
  );
}
