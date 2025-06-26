import { NavLink } from 'react-router-dom';
import { links } from '../config/navLinks';
export default function DesktopNavLinks() {
  
  return (
    <>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          {label}
        </NavLink>
      ))}
    </>
  );
}
